<template>
  <nly-wrapper-content>
    <nly-content-header>
      <nly-container fluid>
        <nly-row class="mb-2">
          <nly-col sm="6">
            <h1>nly-tab</h1>
          </nly-col>
        </nly-row>
      </nly-container>
    </nly-content-header>
    <nly-content>
      <nly-row>
        <nly-col>
          <div>
            <nly-tabs content-class="mt-3">
              <nly-tab title="First" active><p>I'm the first tab</p></nly-tab>
              <nly-tab title="Second"><p>I'm the second tab</p></nly-tab>
              <nly-tab title="Disabled" disabled>
                <p>I'm a disabled tab!</p>
              </nly-tab>
            </nly-tabs>
          </div>
        </nly-col>
      </nly-row>
      <nly-row>
        <nly-col>
          <nly-card>
            <nly-tabs card>
              <nly-tab title="Tab 1" active>
                <nly-card-text>Tab contents 1</nly-card-text>
              </nly-tab>
              <nly-tab title="Tab 2">
                <nly-card-text>Tab contents 2</nly-card-text>
              </nly-tab>
            </nly-tabs>
          </nly-card>
        </nly-col>
      </nly-row>
      <nly-row>
        <nly-col>
          <nly-card>
            <nly-tabs card>
              <nly-tab no-body title="Picture 1">
                <nly-card-img
                  bottom
                  src="https://picsum.photos/600/200/?image=21"
                  alt="Image 21"
                ></nly-card-img>
                <nly-card-footer>Picture 1 footer</nly-card-footer>
              </nly-tab>

              <nly-tab no-body title="Picture 2">
                <nly-card-img
                  bottom
                  src="https://picsum.photos/600/200/?image=25"
                  alt="Image 25"
                ></nly-card-img>
                <nly-card-footer>Picture 2 footer</nly-card-footer>
              </nly-tab>

              <nly-tab no-body title="Picture 3">
                <nly-card-img
                  bottom
                  src="https://picsum.photos/600/200/?image=26"
                  alt="Image 26"
                ></nly-card-img>
                <nly-card-footer>Picture 3 footer</nly-card-footer>
              </nly-tab>

              <nly-tab title="Text">
                <nly-card-title
                  >This tab does not have the <code>no-body</code> prop
                  set</nly-card-title
                >
                <nly-card-text>
                  Quis magna Lorem anim amet ipsum do mollit sit cillum
                  voluptate ex nulla tempor. Laborum consequat non elit enim
                  exercitation cillum aliqua consequat id aliqua. Esse ex
                  consectetur mollit voluptate est in duis laboris ad sit ipsum
                  anim Lorem. Incididunt veniam velit elit elit veniam Lorem
                  aliqua quis ullamco deserunt sit enim elit aliqua esse irure.
                </nly-card-text>
              </nly-tab>
            </nly-tabs>
          </nly-card>
        </nly-col>
      </nly-row>
      <nly-row>
        <nly-col>
          <nly-card>
            <nly-tabs pills card>
              <nly-tab title="Tab 1" active
                ><nly-card-text>Tab contents 1</nly-card-text></nly-tab
              >
              <nly-tab title="Tab 2"
                ><nly-card-text>Tab contents 2</nly-card-text></nly-tab
              >
            </nly-tabs>
          </nly-card>
        </nly-col>
      </nly-row>
    </nly-content>
  </nly-wrapper-content>
</template>
