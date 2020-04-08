<template>
  <nly-content-wrapper>
    <nly-content-header>
      <nly-container fluid>
        <nly-row class="mb-2">
          <nly-col sm="6">
            <h1>nly-infobox</h1>
          </nly-col>
        </nly-row>
      </nly-container>
    </nly-content-header>
    <nly-content>
      <nly-row>
        <nly-col xs="12" md="3" sm="6">
          <nly-infobox>
            <nly-infobox-icon icon="far fa-envelope" bg-variant="info" />
            <nly-infobox-body number="65378454" text="Messages" />
          </nly-infobox>
        </nly-col>
        <nly-col xs="12" md="3" sm="6">
          <nly-infobox>
            <nly-infobox-icon icon="far fa-flag" bg-variant="warning" />
            <nly-infobox-body number="65378454" text="Bookmarks" />
          </nly-infobox>
        </nly-col>
        <nly-col xs="12" md="3" sm="6">
          <nly-infobox>
            <nly-infobox-icon icon="far fa-copy" bg-variant="danger" />
            <nly-infobox-body number="65378454" text="Uploads" />
          </nly-infobox>
        </nly-col>
        <nly-col xs="12" md="3" sm="6">
          <nly-infobox>
            <nly-infobox-icon icon="far fa-star" bg-variant="success" />
            <nly-infobox-body>
              <nly-infobox-text>
                Likes
              </nly-infobox-text>
              <nly-infobox-number>
                65378454
              </nly-infobox-number>
            </nly-infobox-body>
          </nly-infobox>
        </nly-col>
      </nly-row>

      <nly-row>
        <nly-col xs="12" md="3" sm="6">
          <nly-infobox loading>
            <nly-infobox-icon icon="far fa-envelope" bg-variant="info" />
            <nly-infobox-body number="65378454" text="Messages" />
          </nly-infobox>
        </nly-col>
        <nly-col xs="12" md="3" sm="6">
          <nly-infobox loading loading-content="加载中">
            <nly-infobox-icon icon="far fa-flag" bg-variant="warning" />
            <nly-infobox-body number="65378454" text="Bookmarks" />
          </nly-infobox>
        </nly-col>
        <nly-col xs="12" md="3" sm="6">
          <nly-infobox loading loading-icon="fa-2x far fa-copy">
            <nly-infobox-icon icon="far fa-copy" bg-variant="danger" />
            <nly-infobox-body number="65378454" text="Uploads" />
          </nly-infobox>
        </nly-col>
        <nly-col xs="12" md="3" sm="6">
          <nly-infobox loading dark>
            <nly-infobox-icon icon="far fa-star" bg-variant="success" />
            <nly-infobox-body>
              <nly-infobox-text>
                Likes
              </nly-infobox-text>
              <nly-infobox-number>
                65378454
              </nly-infobox-number>
            </nly-infobox-body>
          </nly-infobox>
        </nly-col>

        <nly-col xs="12" md="3" sm="6">
          <nly-infobox loading :loading-img-src="logo">
            <nly-infobox-icon icon="far fa-flag" bg-variant="warning" />
            <nly-infobox-body number="65378454" text="Bookmarks" />
          </nly-infobox>
        </nly-col>
      </nly-row>

      <nly-row>
        <nly-col xs="12" md="3" sm="6">
          <nly-infobox bg-variant="info">
            <nly-infobox-icon icon="far fa-bookmark" />
            <nly-infobox-body
              number="41410"
              text="Bookmarks"
              progress-value="60"
              progress-description="70% Increase in 30 Days"
            />
          </nly-infobox>
        </nly-col>

        <nly-col xs="12" md="3" sm="6">
          <nly-infobox bg-variant="warning">
            <nly-infobox-icon icon="far fa-thumbs-up" />
            <nly-infobox-body
              number="41,410"
              text="Likes"
              progress-value="60"
              progress-description="70% Increase in 30 Days"
            />
          </nly-infobox>
        </nly-col>

        <nly-col xs="12" md="3" sm="6">
          <nly-infobox bg-variant="success">
            <nly-infobox-icon icon="far fa-calendar-alt" />
            <nly-infobox-body
              number="41,410"
              text="Events"
              progress-value="60"
              progress-description="70% Increase in 30 Days"
            />
          </nly-infobox>
        </nly-col>

        <nly-col xs="12" md="3" sm="6">
          <nly-infobox bg-variant="danger">
            <nly-infobox-icon icon="fas fa-comments" />
            <nly-infobox-body
              number="41,410"
              text="Comments"
              progress-value="60"
              progress-description="70% Increase in 30 Days"
            />
          </nly-infobox>
        </nly-col>
      </nly-row>
    </nly-content>
  </nly-content-wrapper>
</template>

<script>
import logo from "../../assets/nly-adminlte-vue/img/NLYLOGO.png";
export default {
  data() {
    return {
      logo
    };
  }
};
</script>
