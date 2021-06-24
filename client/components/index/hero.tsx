import { Navbar } from "../shared";
const Hero = () => {
  return (
    <div className="h-screen lg:px-10 lg:pt-20 px-5 pt-2">
      <div className="bg-base-black rounded-t-xl h-full p-5">
        <Navbar />

        <svg
          className="mx-auto"
          width="1183"
          height="428"
          viewBox="0 0 1183 428"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M221.199 427.6C179.599 427.6 141.799 418.4 107.799 400C74.1992 381.2 47.7992 355.6 28.5992 323.2C9.79922 290.8 0.399219 254.4 0.399219 214C0.399219 173.6 9.79922 137.2 28.5992 104.8C47.7992 72.4 74.1992 47 107.799 28.6C141.799 9.79998 179.599 0.399982 221.199 0.399982C262.799 0.399982 300.199 9.59998 333.399 28C366.999 46.4 393.399 72 412.599 104.8C431.799 137.2 441.399 173.6 441.399 214C441.399 254.4 431.799 291 412.599 323.8C393.399 356.2 366.999 381.6 333.399 400C300.199 418.4 262.799 427.6 221.199 427.6ZM221.199 388C254.399 388 284.399 380.6 311.199 365.8C337.999 350.6 358.999 329.8 374.199 303.4C389.399 276.6 396.999 246.8 396.999 214C396.999 181.2 389.399 151.6 374.199 125.2C358.999 98.4 337.999 77.6 311.199 62.8C284.399 47.6 254.399 40 221.199 40C187.999 40 157.799 47.6 130.599 62.8C103.799 77.6 82.5992 98.4 66.9992 125.2C51.7992 151.6 44.1992 181.2 44.1992 214C44.1992 246.8 51.7992 276.6 66.9992 303.4C82.5992 329.8 103.799 350.6 130.599 365.8C157.799 380.6 187.999 388 221.199 388ZM656.72 427.6C625.52 427.6 595.52 422.6 566.72 412.6C538.32 402.6 516.32 389.4 500.72 373L518.12 338.8C533.32 354 553.52 366.4 578.72 376C603.92 385.2 629.92 389.8 656.72 389.8C694.32 389.8 722.52 383 741.32 369.4C760.12 355.4 769.52 337.4 769.52 315.4C769.52 298.6 764.32 285.2 753.92 275.2C743.92 265.2 731.52 257.6 716.72 252.4C701.92 246.8 681.32 240.8 654.92 234.4C623.32 226.4 598.12 218.8 579.32 211.6C560.52 204 544.32 192.6 530.72 177.4C517.52 162.2 510.92 141.6 510.92 115.6C510.92 94.4 516.52 75.2 527.72 58C538.92 40.4 556.12 26.4 579.32 16C602.52 5.59999 631.32 0.399982 665.72 0.399982C689.72 0.399982 713.12 3.79999 735.92 10.6C759.12 17 779.12 26 795.92 37.6L780.92 73C763.32 61.4 744.52 52.8 724.52 47.2C704.52 41.2 684.92 38.2 665.72 38.2C628.92 38.2 601.12 45.4 582.32 59.8C563.92 73.8 554.72 92 554.72 114.4C554.72 131.2 559.72 144.8 569.72 155.2C580.12 165.2 592.92 173 608.12 178.6C623.72 183.8 644.52 189.6 670.52 196C701.32 203.6 726.12 211.2 744.92 218.8C764.12 226 780.32 237.2 793.52 252.4C806.72 267.2 813.32 287.4 813.32 313C813.32 334.2 807.52 353.6 795.92 371.2C784.72 388.4 767.32 402.2 743.72 412.6C720.12 422.6 691.12 427.6 656.72 427.6ZM1025.86 427.6C994.66 427.6 964.66 422.6 935.86 412.6C907.46 402.6 885.46 389.4 869.86 373L887.26 338.8C902.46 354 922.66 366.4 947.86 376C973.06 385.2 999.06 389.8 1025.86 389.8C1063.46 389.8 1091.66 383 1110.46 369.4C1129.26 355.4 1138.66 337.4 1138.66 315.4C1138.66 298.6 1133.46 285.2 1123.06 275.2C1113.06 265.2 1100.66 257.6 1085.86 252.4C1071.06 246.8 1050.46 240.8 1024.06 234.4C992.46 226.4 967.26 218.8 948.46 211.6C929.66 204 913.46 192.6 899.86 177.4C886.66 162.2 880.06 141.6 880.06 115.6C880.06 94.4 885.66 75.2 896.86 58C908.06 40.4 925.26 26.4 948.46 16C971.66 5.59999 1000.46 0.399982 1034.86 0.399982C1058.86 0.399982 1082.26 3.79999 1105.06 10.6C1128.26 17 1148.26 26 1165.06 37.6L1150.06 73C1132.46 61.4 1113.66 52.8 1093.66 47.2C1073.66 41.2 1054.06 38.2 1034.86 38.2C998.06 38.2 970.26 45.4 951.46 59.8C933.06 73.8 923.86 92 923.86 114.4C923.86 131.2 928.86 144.8 938.86 155.2C949.26 165.2 962.06 173 977.26 178.6C992.86 183.8 1013.66 189.6 1039.66 196C1070.46 203.6 1095.26 211.2 1114.06 218.8C1133.26 226 1149.46 237.2 1162.66 252.4C1175.86 267.2 1182.46 287.4 1182.46 313C1182.46 334.2 1176.66 353.6 1165.06 371.2C1153.86 388.4 1136.46 402.2 1112.86 412.6C1089.26 422.6 1060.26 427.6 1025.86 427.6Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="590"
              y1="-157"
              x2="590"
              y2="440.348"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#284B63" />
              <stop offset="0.75" stop-color="white" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <div className="bg-white rounded-md absolute w-96 h-screen">
          <div className="sticky top-10">main</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
