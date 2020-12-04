
  let MAX_FRAMES_PER_SECOND = 25;
  let frame_hist_ = new Array(MAX_FRAMES_PER_SECOND).fill(0);
  let pre_frame_hist_ = new Array(MAX_FRAMES_PER_SECOND).fill(0)
  let first_stat_ = true;
  let QualityConstant = {
          MinQuality: 0,
          DieQuality: 0,
          PoorMinQuality: 1,
          MiddleMinQuality: 30,
          GoodMinQuality: 65,
          ExcellentMinQuality: 85,
          MaxQuality: 100
  };
  //返回值 质量参考
  let QualityGrade = {
          Unknown: -1,
          Excellent: 0,
          Good: 1,
          Middle: 2,
          Poor: 3,
          Die: 4,
  };

  function CompareU32(t1, t2) {
          let d = t1 - t2;
          return d;
  }

  function Quality2QualityGrade(quality) {
          let quality_grade = QualityGrade.Unknown;
          if (quality >= QualityConstant.ExcellentMinQuality) {
                  quality_grade = QualityGrade.Excellent;
          } else if (quality >= QualityConstant.GoodMinQuality) {
                  quality_grade = QualityGrade.Good;
          } else if (quality >= QualityConstant.MiddleMinQuality) {
                  quality_grade = QualityGrade.Middle;
          } else if (quality >= QualityConstant.PoorMinQuality) {
                  quality_grade = QualityGrade.Poor;
          } else {
                  quality_grade = QualityGrade.Die;
          }
          return quality_grade;
  }

  function CalcQualityOfJitterGrade(jitter_grade, quality) {
          //jitter_grade >= -10 && jitter_grade <= 10
          if (jitter_grade > 8) {
                  quality = QualityConstant.ExcellentMinQuality + (QualityConstant.MaxQuality - QualityConstant.ExcellentMinQuality) * (jitter_grade - 8) / 2;
          } else if (jitter_grade > 4) {
                  quality = QualityConstant.GoodMinQuality + (QualityConstant.ExcellentMinQuality - QualityConstant.GoodMinQuality) * (jitter_grade - 4) / 4;
          } else if (jitter_grade > 0) {
                  quality = QualityConstant.MiddleMinQuality + (QualityConstant.GoodMinQuality - QualityConstant.MiddleMinQuality) * (jitter_grade - 0) / 4;
          } else if (jitter_grade > -4) {
                  quality = QualityConstant.PoorMinQuality + (QualityConstant.MiddleMinQuality - QualityConstant.PoorMinQuality) * 0.6;
          } else if (jitter_grade > -8) {
                  quality = QualityConstant.PoorMinQuality + (QualityConstant.MiddleMinQuality - QualityConstant.PoorMinQuality) * 0.3;
          } else {
                  quality = QualityConstant.DieQuality;
          }
          return Quality2QualityGrade(quality);
  }


  function CalcQualityGrade(fps) {
          let histogram_delta = new Array(20).fill(0);
          let arrGrade = new Array(4).fill(0);
          let histogram_cnt = 0;
          let nGrade = 0;

          if (fps >= 0 && fps < MAX_FRAMES_PER_SECOND) {
                  frame_hist_[fps]++;
          } else {
                  frame_hist_[MAX_FRAMES_PER_SECOND - 1]++;
          }
          var grade = 0;
          if (first_stat_) {
                  first_stat_ = false;
          } else {
                  for (let idx = 0; idx < MAX_FRAMES_PER_SECOND; idx++) {
                          histogram_delta[idx] = CompareU32(frame_hist_[idx], pre_frame_hist_[idx]);
                          if (idx < 6) {
                                  // very bad
                                  arrGrade[0] += histogram_delta[idx];
                          } else if (idx < 12) {
                                  // bad
                                  arrGrade[1] += histogram_delta[idx];
                          } else if (idx < 20) {
                                  // good
                                  arrGrade[2] += histogram_delta[idx];
                          } else {
                                  // very good
                                  arrGrade[3] += histogram_delta[idx];
                          }

                          histogram_cnt += histogram_delta[idx];
                  }


                  if (histogram_cnt) {
                          const weight = [-10, -5, 5, 10];
                          for (let idx = 0; idx < 4; idx++) {
                                  arrGrade[idx] /= histogram_cnt;
                                  grade += (arrGrade[idx] * weight[idx]);
                          }
                  }

                  let network_quality = 0;
                  nGrade = CalcQualityOfJitterGrade(grade, network_quality);
          }

          for (let i = 0; i < MAX_FRAMES_PER_SECOND; i++) {
                  pre_frame_hist_[i] = frame_hist_[i];
          }
          return nGrade;
  }
export {CalcQualityGrade} 