<template>
  <nly-content-wrapper>
    <nly-content-header>
      <nly-container fluid>
        <nly-row class="mb-2">
          <nly-col sm="6">
            <h1>nly-container</h1>
          </nly-col>
        </nly-row>
      </nly-container>
    </nly-content-header>
    <nly-content>
      <nly-container>
        <div
          style="background-color:#000;height:70px;color:#fff;text-align: center;"
        >
          <p>
            container
          </p>
        </div>
      </nly-container>

      <nly-container fluid>
        <div
          style="background-color:#007bff;height:70px;color:#fff;text-align: center;"
        >
          <p>
            container fluid
          </p>
        </div>
      </nly-container>

      <nly-container tag="li">
        <div
          style="background-color:#28a745;height:70px;color:#fff;text-align: center;"
        >
          <p>
            container tag=li
          </p>
        </div>
      </nly-container>
    </nly-content>
  </nly-content-wrapper>
</template>
