<template>
  <div class="card card-secondary">
    <div class="card-header">
      <h3 class="card-title">Custom Elements</h3>
    </div>
    <!-- /.card-header -->
    <div class="card-body">
      <form role="form">
        <div class="row">
          <div class="col-sm-6">
            <!-- checkbox -->
            <div class="form-group">
              <div class="custom-control custom-checkbox">
                <input
                  class="custom-control-input"
                  type="checkbox"
                  id="customCheckbox1"
                  value="option1"
                />
                <label for="customCheckbox1" class="custom-control-label"
                  >Custom Checkbox</label
                >
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  class="custom-control-input"
                  type="checkbox"
                  id="customCheckbox2"
                  checked=""
                />
                <label for="customCheckbox2" class="custom-control-label"
                  >Custom Checkbox checked</label
                >
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  class="custom-control-input"
                  type="checkbox"
                  id="customCheckbox3"
                  disabled=""
                />
                <label for="customCheckbox3" class="custom-control-label"
                  >Custom Checkbox disabled</label
                >
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <!-- radio -->
            <div class="form-group">
              <div class="custom-control custom-radio">
                <input
                  class="custom-control-input"
                  type="radio"
                  id="customRadio1"
                  name="customRadio"
                />
                <label for="customRadio1" class="custom-control-label"
                  >Custom Radio</label
                >
              </div>
              <div class="custom-control custom-radio">
                <input
                  class="custom-control-input"
                  type="radio"
                  id="customRadio2"
                  name="customRadio"
                  checked=""
                />
                <label for="customRadio2" class="custom-control-label"
                  >Custom Radio checked</label
                >
              </div>
              <div class="custom-control custom-radio">
                <input
                  class="custom-control-input"
                  type="radio"
                  id="customRadio3"
                  disabled=""
                />
                <label for="customRadio3" class="custom-control-label"
                  >Custom Radio disabled</label
                >
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6">
            <!-- select -->
            <div class="form-group">
              <label>Custom Select</label>
              <select class="custom-select">
                <option>option 1</option>
                <option>option 2</option>
                <option>option 3</option>
                <option>option 4</option>
                <option>option 5</option>
              </select>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <label>Custom Select Disabled</label>
              <select class="custom-select" disabled="">
                <option>option 1</option>
                <option>option 2</option>
                <option>option 3</option>
                <option>option 4</option>
                <option>option 5</option>
              </select>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6">
            <!-- Select multiple-->
            <div class="form-group">
              <label>Custom Select Multiple</label>
              <select multiple="" class="custom-select">
                <option>option 1</option>
                <option>option 2</option>
                <option>option 3</option>
                <option>option 4</option>
                <option>option 5</option>
              </select>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <label>Custom Select Multiple Disabled</label>
              <select multiple="" class="custom-select" disabled="">
                <option>option 1</option>
                <option>option 2</option>
                <option>option 3</option>
                <option>option 4</option>
                <option>option 5</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form-group">
          <div class="custom-control custom-switch">
            <input
              type="checkbox"
              class="custom-control-input "
              id="customSwitch1"
            />
            <label class="custom-control-label" for="customSwitch1"
              >Toggle this custom switch element</label
            >
          </div>
        </div>
        <div class="form-group ">
          <div
            class="custom-control custom-switch custom-switch-off-danger custom-switch-on-success"
          >
            <input
              type="checkbox"
              class="custom-control-input"
              id="customSwitch3"
            />
            <label class="custom-control-label" for="customSwitch3"
              >Toggle this custom switch element with custom colors
              danger/success</label
            >
          </div>
        </div>
        <div class="form-group">
          <div class="custom-control custom-switch">
            <input
              type="checkbox"
              class="custom-control-input"
              disabled=""
              id="customSwitch2"
            />
            <label class="custom-control-label" for="customSwitch2"
              >Disabled custom switch element</label
            >
          </div>
        </div>
        <div class="form-group">
          <label for="customRange1">Custom range</label>
          <input type="range" class="custom-range" id="customRange1" />
        </div>
        <div class="form-group">
          <label for="customRange1">Custom range (custom-range-danger)</label>
          <input
            type="range"
            class="custom-range custom-range-danger"
            id="customRange1"
          />
        </div>
        <div class="form-group">
          <label for="customRange1">Custom range (custom-range-teal)</label>
          <input
            type="range"
            class="custom-range custom-range-teal"
            id="customRange1"
          />
        </div>
        <div class="form-group">
          <!-- <label for="customFile">Custom File</label> -->

          <div class="custom-file">
            <input type="file" class="custom-file-input" id="customFile" />
            <label class="custom-file-label" for="customFile"
              >Choose file</label
            >
          </div>
        </div>
        <div class="form-group"></div>
      </form>
    </div>
    <!-- /.card-body -->
  </div>
</template>
