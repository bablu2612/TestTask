import styled from "styled-components";

export const HomeStyles = styled.div`
  background-color: #f2efe4;
  .cointainer {
    padding: 50px 15px;
    max-width: 1400px;
    margin: 0 auto;
    @media (max-width: 1365px) {
      max-width: 1170px;
    }
    .row {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      justify-content: center;
      @media (max-width: 1365px) {
        gap: 20px 10px;
      }
      @media (max-width: 1199px) {
        gap: 20px;
      }
      .image_box {
        max-width: calc(100% / 6 - 25px);
        width: 100%;
        flex: calc(100% / 6 - 25px);
        @media (max-width: 1365px) {
          max-width: calc(100% / 5 - 20px);
          flex: calc(100% / 5 - 20px);
        }
        @media (max-width: 1199px) {
          max-width: calc(100% / 4 - 30px);
          flex: calc(100% / 4 - 30px);
        }
        @media (max-width: 991px) {
          max-width: calc(100% / 3 - 14px);
          flex: calc(100% / 3 - 14px);
        }
        @media (max-width: 767px) {
          max-width: calc(100% / 2 - 13px);
          flex: calc(100% / 2 - 13px);
        }
        @media (max-width: 576px) {
          max-width: calc(100%);
          flex: calc(100%);
        }
        .image_box {
          word-break: break-all;
        }
        .bottom_div {
          text-align: left;
          height: 0;
          transform-origin: top;
          transition: 0.3s ease all;
          opacity: 0;
          margin-top: 10px;
          p {
            margin: 0 0 10px;
          }
        }
        .innerBox {
          max-width: 200px;
          margin: 0 auto;
          background: #fff;
          border-radius: 10px;
          overflow: hidden;
          transition: 0.3s ease all;
          @media (max-width: 1199px) {
            max-width: 100%;
          }
          &:hover {
            transform: scale(1.2);
            width: 300px;
            position: relative;
            z-index: 9;
            box-shadow: 0 0 8px rgb(0 0 0 / 47%);
            .bottom_div {
              opacity: 1;
              height: auto;
            }
          }
          .container-content {
            padding: 10px;
            min-height: 50px;
            h3 {
              font-size: 16px;
              margin: 0;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2; /* number of lines to show */
              line-clamp: 2;
              -webkit-box-orient: vertical;
            }
          }
        }

        .img_rank {
          position: relative;
          height: 250px;
          overflow: hidden;

          h6 {
            position: absolute;
            right: 0;
            top: 0;
            background: pink;
            padding: 10px;
            z-index: 1;
            margin: 0;
          }
          img {
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
    .recharts-tooltip-wrapper {
      &:focus-visible {
        outline: none;
      }
    }
  }
`;
