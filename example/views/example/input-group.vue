<template>
  <nly-content-wrapper>
    <nly-content-header>
      <nly-container fluid>
        <nly-row class="mnly-2">
          <nly-col sm="6">
            <h1>nly-input-group</h1>
          </nly-col>
        </nly-row>
      </nly-container>
    </nly-content-header>
    <nly-content>
      <nly-row>
        <nly-col>
          <nly-input-group prepend="$" append=".00">
            <nly-form-input> </nly-form-input>
          </nly-input-group>
        </nly-col>
      </nly-row>
      <nly-row>
        <nly-col>
          <nly-input-group class="mt-3">
            <template v-slot:append>
              <nly-input-group-text
                ><strong class="text-danger">!</strong></nly-input-group-text
              >
            </template>
            <nly-form-input></nly-form-input>
          </nly-input-group>
        </nly-col>
      </nly-row>
      <nly-row>
        <nly-col>
          <nly-input-group prepend="Username" class="mt-3">
            <nly-form-input></nly-form-input>
            <nly-input-group-append>
              <nly-button variant="outlineSuccess">Button</nly-button>
              <nly-button variant="info">Button</nly-button>
            </nly-input-group-append>
          </nly-input-group>
        </nly-col>
      </nly-row>
      <nly-row>
        <nly-col>
          <nly-input-group prepend="0" append="100" class="mt-3">
            <nly-form-input type="range" min="0" max="100"></nly-form-input>
          </nly-input-group>
        </nly-col>
      </nly-row>
    </nly-content>
  </nly-content-wrapper>
</template>
