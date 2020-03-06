<template>
  <nly-content-wrapper>
    <nly-content-header>
      <nly-container fluid>
        <nly-row class="mb-2">
          <nly-col sm="6">
            <h1>nly-row, nly-col</h1>
          </nly-col>
        </nly-row>
      </nly-container>
    </nly-content-header>
    <nly-content>
      <div class="demo">
        <div class="title">
          <p>无</p>
          <nly-row no-gutters>
            <div class="col">1</div>
            <div class="col">2</div>
            <div class="col">3</div>
            <div class="col">4</div>
          </nly-row>
        </div>

        <div class="title">
          <p>cols-xs="1"</p>
          <nly-row cols-xs="1">
            <div class="col">1</div>
            <div class="col">2</div>
            <div class="col">3</div>
            <div class="col">4</div>
          </nly-row>
        </div>

        <div class="title">
          <p>cols-xs="1" cols-sm="2"</p>
          <nly-row cols-xs="1" cols-sm="2">
            <div class="col">1</div>
            <div class="col">2</div>
            <div class="col">3</div>
            <div class="col">4</div>
          </nly-row>
        </div>

        <div class="title">
          <p>cols-xs="1" cols-sm="2" cols-md="3"</p>
          <nly-row cols-xs="1" cols-sm="2" cols-md="3">
            <div class="col">1</div>
            <div class="col">2</div>
            <div class="col">3</div>
            <div class="col">4</div>
          </nly-row>
        </div>

        <div class="title">
          <p>cols-xs="1" cols-sm="2" cols-md="3" cols-lg="4"</p>
          <nly-row cols-xs="1" cols-lg="4" cols-md="3" cols-sm="2">
            <div class="col">1</div>
            <div class="col">2</div>
            <div class="col">3</div>
            <div class="col">4</div>
          </nly-row>
        </div>

        <div class="title">
          <p>row-class="xxx"</p>
          <nly-row row-class="xxx">
            <div class="col">1</div>
            <div class="col">2</div>
            <div class="col">3</div>
            <div class="col">4</div>
          </nly-row>
        </div>

        <div class="title">
          <p></p>
          <nly-row>
            <nly-col> </nly-col>
            <nly-col> </nly-col>
          </nly-row>
        </div>

        <div class="title">
          <p>col</p>
          <nly-row>
            <nly-col col> col</nly-col>
            <nly-col col> col</nly-col>
          </nly-row>
        </div>

        <div class="title">
          <p>col</p>
          <nly-row>
            <nly-col xs="3" sm="4" md="5" lg="6" xl="7">
              xs="3" sm="4" md="5" lg="6" xl="7"</nly-col
            >
            <nly-col xs="9" sm="8" md="7" lg="6" xl="5">
              xs="9" sm="8" md="7" lg="6" xl="5"</nly-col
            >
          </nly-row>
        </div>

        <div class="title">
          <p>col</p>
          <nly-row>
            <nly-col xs="9" sm="8" md="7" lg="6" xl="5">
              xs="9" sm="8" md="7" lg="6" xl="5"</nly-col
            >
            <nly-col xs="auto">我是xs="auto"</nly-col>
          </nly-row>
        </div>

        <div class="title">
          <p>offset</p>
          <nly-row>
            <nly-col col> col</nly-col>
            <nly-col xs="4" offset-xs="3">xs="4" offset-xs="3"</nly-col>
          </nly-row>
        </div>

        <div class="title">
          <p>order</p>
          <nly-row style="padding-bottom:10px">
            <nly-col
              order-xs="1"
              order-sm="2"
              order-md="3"
              order-lg="4"
              style="background-color: #28a745;"
            >
              order-xs="1" order-sm="2" order-md="3" order-lg="4"</nly-col
            >

            <nly-col
              order-xs="2"
              order-sm="3"
              order-md="4"
              order-lg="1"
              style="background-color: #17a2b8;"
            >
              order-xs="2" order-sm="3" order-md="4" order-lg="1"</nly-col
            >

            <nly-col
              order-xs="3"
              order-sm="4"
              order-md="1"
              order-lg="2"
              style="background-color: #ffc107;"
            >
              order-xs="3" order-sm="4" order-md="1" order-lg="2"</nly-col
            >

            <nly-col
              order-xs="4"
              order-sm="1"
              order-md="2"
              order-lg="3"
              style="background-color: #dc3545;"
            >
              order-xs="4" order-sm="1" order-md="2" order-lg="3"</nly-col
            >
          </nly-row>
        </div>
      </div>
    </nly-content>
  </nly-content-wrapper>
</template>

<style lang="scss" scoped>
.demo .title {
  text-align: center;
  p {
    background-color: antiquewhite;
  }
}

.demo .row {
  min-height: 90px;
  text-align: center;
}
.demo .row > .col:not(.header),
.demo .row > [class^="col-"] {
  border: 1px solid #bababa;
  background-color: rgba(86, 61, 124, 0.15);
  color: #000;
}
</style>
