<template>
  <nly-container>
    <nly-row>
      <nly-col xs="12" lg="4">
        <nly-card>
          <nly-card-header>
            was-validated input
          </nly-card-header>
          <nly-card-body>
            <nly-card-text tag="h6">
              was-validated 需要配合input type required使用
            </nly-card-text>
            <div class="form-group was-validated">
              <label> was-validated input type </label>
              <input type="email" class="form-control" required />
            </div>

            <div class="form-group was-validated">
              <label>
                was-validated input type valid-feedback invalid-feedback</label
              >
              <input type="email" class="form-control" />
              <span class="valid-feedback">我是通过验证提示信息</span>
              <span class="invalid-feedback">我是验证不通过的提示信息</span>
            </div>

            <nly-card-text>
              tooltip分为valid-tooltip和invalid-tooltip
            </nly-card-text>
            <div class="form-group was-validated">
              <label>
                was-validated input type valid-tooltip invalid-tooltip</label
              >
              <input type="email" class="form-control" />
              <div class="valid-tooltip">我是通过验证提示信息</div>
              <div class="invalid-tooltip">我是验证不通过的提示信息</div>
            </div>
          </nly-card-body>
        </nly-card>
      </nly-col>
      <nly-col xs="12" lg="4">
        <nly-card>
          <nly-card-header>
            valid input
          </nly-card-header>
          <nly-card-body>
            <div class="form-group">
              <label> is-valid</label>
              <input class="form-control is-valid" />
            </div>

            <div class="form-group">
              <label> is-invalid</label>
              <input class="form-control is-invalid" />
            </div>

            <div class="form-group">
              <label> is-valid valid-feedback</label>
              <input class="form-control is-valid" />
              <span class="valid-feedback">我是通过验证提示信息</span>
            </div>

            <nly-card-text>
              tooltip分为valid-tooltip和invalid-tooltip
              <br />
              is-valid和valid-tooltip为兄弟元素
              <br />
              is-invalid和invalid-tooltip为兄弟元素
            </nly-card-text>
            <div class="form-group">
              <label> is-valid valid-tooltip</label>
              <input class="form-control is-valid" />
              <span class="valid-tooltip">我是通过验证提示信息</span>
            </div>

            <div class="form-group">
              <label> is-invalid invalid-feedback</label>
              <input class="form-control is-invalid" />
              <span class="invalid-feedback">我是没有验证提示信息</span>
            </div>
          </nly-card-body>
        </nly-card>
      </nly-col>
      <nly-col xs="12" lg="4">
        <nly-card>
          <nly-card-header>
            is-warning input
          </nly-card-header>
          <nly-card-body>
            <div class="form-group">
              <label> is-warning </label>
              <input class="form-control is-warning" />
            </div>
            <div class="form-group">
              <label> is-warning warning-feedback</label>
              <input class="form-control is-warning" />
              <span class="warning-feedback">我是通过验证提示信息</span>
            </div>

            <div class="form-group">
              <label> is-warning warning-feedback</label>
              <input class="form-control is-warning" />
              <span class="warning-tooltip">我是通过验证提示信息</span>
            </div>
          </nly-card-body>
        </nly-card>
      </nly-col>
    </nly-row>
    <nly-row>
      <nly-col xs="12" lg="4">
        <nly-card>
          <nly-card-header>
            was-validated
          </nly-card-header>
          <nly-card-body>
            <nly-card-text>
              was-validated支持input,select,textarea,
            </nly-card-text>
            <div class="form-group was-validated">
              <label> textarea maxlength </label>
              <textarea class="form-control" ref="textarea" maxlength="10" />
              <span class="valid-feedback">我是通过验证提示信息</span>
              <span class="invalid-feedback">我是验证不通过的提示信息</span>
            </div>

            <div class="form-group was-validated">
              <label> Select required</label>
              <select class="custom-select" required>
                <option></option>
                <option>option 1</option>
                <option>option 2</option>
                <option>option 3</option>
                <option>option 4</option>
                <option>option 5</option>
              </select>
              <span class="valid-feedback">我是通过验证提示信息</span>
              <span class="invalid-feedback">我是验证不通过的提示信息</span>
            </div>

            <nly-card-text>
              只有红色边框，无右侧图标，被browse挡住了
            </nly-card-text>
            <div class="form-group was-validated">
              <label>file required</label>
              <div class="custom-file">
                <input type="file" class="custom-file-input" required />
                <label class="custom-file-label" for="customFile"
                  >Choose file</label
                >
                <span class="valid-feedback">我是通过验证提示信息</span>
                <span class="invalid-feedback">我是验证不通过的提示信息</span>
              </div>
            </div>

            <div class="form-group was-validated">
              <label>check</label>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" required />
                <label class="form-check-label">Checkbox</label>
                <span class="valid-feedback">我是通过验证提示信息</span>
                <span class="invalid-feedback">我是验证不通过的提示信息</span>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  checked="null"
                  required
                />
                <label class="form-check-label">Checkbox checked</label>
                <span class="valid-feedback">我是通过验证提示信息</span>
                <span class="invalid-feedback">我是验证不通过的提示信息</span>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" disabled="" />
                <label class="form-check-label">Checkbox disabled</label>
                <span class="valid-feedback">我是通过验证提示信息</span>
                <span class="invalid-feedback">我是验证不通过的提示信息</span>
              </div>
            </div>

            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="radio1" />
                <label class="form-check-label">Radio</label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="radio1"
                  checked=""
                />
                <label class="form-check-label">Radio checked</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" disabled="" />
                <label class="form-check-label">Radio disabled</label>
              </div>
            </div>
          </nly-card-body>
        </nly-card>
      </nly-col>
    </nly-row>
    <div class="card card-info">
      <div class="card-header">
        <h3 class="card-title">Color &amp; Time Picker</h3>
      </div>
      <div class="card-body">
        <!-- Color Picker -->
        <div class="form-group">
          <label>Color picker:</label>
          <input
            type="text"
            class="form-control my-colorpicker1 colorpicker-element"
            data-colorpicker-id="1"
            data-original-title=""
            title=""
          />
        </div>
        <!-- /.form group -->

        <!-- Color Picker -->
        <div class="form-group">
          <label>Color picker with addon:</label>

          <div
            class="input-group my-colorpicker2 colorpicker-element"
            data-colorpicker-id="2"
          >
            <input
              type="text"
              class="form-control"
              data-original-title=""
              title=""
            />

            <div class="input-group-append">
              <span class="input-group-text"
                ><i class="fas fa-square"></i
              ></span>
            </div>
          </div>
          <!-- /.input group -->
        </div>
        <!-- /.form group -->

        <!-- time Picker -->
        <div class="bootstrap-timepicker">
          <div class="form-group">
            <label>Time picker:</label>

            <div
              class="input-group date"
              id="timepicker"
              data-target-input="nearest"
            >
              <input
                type="text"
                class="form-control datetimepicker-input"
                data-target="#timepicker"
              />
              <div
                class="input-group-append"
                data-target="#timepicker"
                data-toggle="datetimepicker"
              >
                <div class="input-group-text"><i class="far fa-clock"></i></div>
              </div>
            </div>
            <!-- /.input group -->
          </div>
          <!-- /.form group -->
        </div>
      </div>
      <!-- /.card-body -->
    </div>
  </nly-container>
</template>
