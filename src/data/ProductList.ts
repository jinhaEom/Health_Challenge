import { ProductReview, ProductReviews } from './ProductReview';

export interface ProductInfo {
  id: number;
  name: string;
  price: number;
  type: string;
  description: string;
  images: string[];
  reviewAmount: number;
  ProductReview: ProductReview[];
}

export const ProductList: ProductInfo[] = [
  {
    //vitamin
    id: 1,
    name: '아임비타 멀티비타민 데일리, 60정, 1개',
    price: 7890,
    type: 'vitamin',
    description: `[주요성분] 종합비타민 /[섭취정보] 섭취대상:성인남녀/섭취횟수, 양:1일 1회, 1회 1병/총량:60정/섭취기간:2개월/형태:캡슐,정/[인증]건강기능식품/기능성:영양보충/[기능성분]비타민B1: 3.6mg / 비타민B2: 4.2mg / 비타민B6: 4.5mg / 비타민B12: 24㎍ / 판토텐산: 15mg / 비오틴: 90㎍ / 엽산: 600㎍ / 비타민C: 100mg / 비타민A: 700㎍RE / 비타민D: 10㎍ / 비타민E: 11mgα-TE / 비타민K: 70㎍ / 아연: 8.5mg / 셀렌: 55㎍ / 망간: 3mg / 몰리브덴: 25㎍ / 철: 12mg / 요오드: 150㎍`,
    images: [
      'https://img.danawa.com/prod_img/500000/551/230/img/19230551_1.jpg?_v=20230306143127',
      'https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/2818647097596058-03ab8875-7357-43d3-aed6-9de256ba35ed.png',
    ],
    reviewAmount: 42,
    ProductReview: ProductReviews[1] || [],
  },
  {
    id: 2,
    name: '종근당 칼숨 앤 마그네슘 비타민D 아연,180정, 1개',
    price: 12550,
    type: 'vitamin',
    description: `[주요성분] 칼마디/아연/[섭취정보]섭취대상:성인남녀/섭취횟수, 양:1일 1회, 1회 2정/총량:180정/섭취기간:3개월/형태:캡슐,정/[인증]건강기능식품/기능성:골다공증발생 위험 감소,뼈 건강/[기능성분] 칼슘: 300mg / 마그네슘: 150mg / 아연: 8.5mg / 비타민D: 5㎍`,
    images: [
      'https://img.danawa.com/prod_img/500000/606/985/img/5985606_1.jpg?_v=20240111151657',
      'https://img.dongwonmall.com/dwmall/static_root/product_img/main/0008757/000875711_1_a.jpg?f=webp&q=80',
    ],
    reviewAmount: 22,
    ProductReview: ProductReviews[2] || [],
  },
  {
    id: 3,
    name: '위시헬씨 하루엔진 올인원 퍼펙트 71.1g',
    price: 36900,
    type: 'vitamin',
    description: `1일섭취량: 주황색 1정(1,000 mg), 연질 1캡슐(920mg), 경질 1캡슐(450 mg) 열량 13 kcal, 탄수화물 1g(0%), 단백질 0g(0%), 지방 0.1 g(2%), 나트륨 0mg(0%), 프로바이오틱스 수 10억 CFU, EPA와 DHA의 함 600 mg, 루테인 20mg, 비타민B, 6mg(500 %), 비타민B2 7mg(500%), 비타민Bg 7.5mg(500%), 비타민B12 24µg(1,000%), 나이아신 15mg(100 %), 판토텐산 5mg(100%), 비오틴 30µg(100%), 엽산 400µg DFE(100%), 비타민C 30mg(30%), 비타민E 5.5mg TE(50%), 비타민D 10µg(100%), 비타민K 70µg(100 %), 마그네슘 94.5mg(30%), 요오드 45 µg(30 %), 철 3.6mg(30 %), 아연 2.55 mg(30 %), 구리 0.24 mg(30 %), 셀렌27.5 g (50%), 크롬 10µg(33 %), 망간 0.9 mg(30 %), 몰리브덴 7.5µg(30%)
※( )안의 수치는 1일 영양성분기준치에 대한 비율`,
    images: [
      'https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/2025/07/29/16/7/e1472991-d069-4cb3-bee1-0f287dae72c2.jpg',
      'https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/668f/b18fc34e273b4aef795e1a798b6ded7e6b72402e25d2bf99686b335c152b.png',
    ],
    reviewAmount: 12,
    ProductReview: ProductReviews[3] || [],
  },
  {
    id: 4,
    name: '고려은단 쏠라C 정 레몬맛, 80정, 1개',
    price: 6660,
    type: 'vitamin',
    description: `1일섭취량: 주황색 1정(1,000 mg), 연질 1캡슐(920mg), 경질 1캡슐(450 mg) 열량 13 kcal, 탄수화물 1g(0%), 단백질 0g(0%), 지방 0.1 g(2%), 나트륨 0mg(0%), 프로바이오틱스 수 10억 CFU, EPA와 DHA의 함 600 mg, 루테인 20mg, 비타민B, 6mg(500 %), 비타민B2 7mg(500%), 비타민Bg 7.5mg(500%), 비타민B12 24µg(1,000%), 나이아신 15mg(100 %), 판토텐산 5mg(100%), 비오틴 30µg(100%), 엽산 400µg DFE(100%), 비타민C 30mg(30%), 비타민E 5.5mg TE(50%), 비타민D 10µg(100%), 비타민K 70µg(100 %), 마그네슘 94.5mg(30%), 요오드 45 µg(30 %), 철 3.6mg(30 %), 아연 2.55 mg(30 %), 구리 0.24 mg(30 %), 셀렌27.5 g (50%), 크롬 10µg(33 %), 망간 0.9 mg(30 %), 몰리브덴 7.5µg(30%)
    ※( )안의 수치는 1일 영양성분기준치에 대한 비율`,
    images: [
      'https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/1025_amir_coupang_oct_80k/a502/66324d681833c4dac21dcd0265a644889b52e7c213db08ecd3e5af296c39.jpg',
      'https://img.danawa.com/prod_img/500000/895/119/img/4119895_1.jpg?_v=20200728144339',
    ],
    reviewAmount: 42,
    ProductReview: ProductReviews[4] || [],
  },
  {
    id: 5,
    name: '대상웰라이프 올인원 이뮨 비타 멀티팩, 28회분, 1개',
    price: 27140,
    type: 'vitamin',
    description: `1일섭취량: 주황색 1정(1,000 mg), 연질 1캡슐(920mg), 경질 1캡슐(450 mg) 열량 13 kcal, 탄수화물 1g(0%), 단백질 0g(0%), 지방 0.1 g(2%), 나트륨 0mg(0%), 프로바이오틱스 수 10억 CFU, EPA와 DHA의 함 600 mg, 루테인 20mg, 비타민B, 6mg(500 %), 비타민B2 7mg(500%), 비타민Bg 7.5mg(500%), 비타민B12 24µg(1,000%), 나이아신 15mg(100 %), 판토텐산 5mg(100%), 비오틴 30µg(100%), 엽산 400µg DFE(100%), 비타민C 30mg(30%), 비타민E 5.5mg TE(50%), 비타민D 10µg(100%), 비타민K 70µg(100 %), 마그네슘 94.5mg(30%), 요오드 45 µg(30 %), 철 3.6mg(30 %), 아연 2.55 mg(30 %), 구리 0.24 mg(30 %), 셀렌27.5 g (50%), 크롬 10µg(33 %), 망간 0.9 mg(30 %), 몰리브덴 7.5µg(30%)
    ※( )안의 수치는 1일 영양성분기준치에 대한 비율`,
    images: [
      'https://cdn.wellife.co.kr/upload/item/G2001001417/202508010959050372_L.jpg',
      'https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/35784401160218-ef013c6d-c249-4932-817d-d8af452559a3.jpg',
    ],
    reviewAmount: 150,
    ProductReview: ProductReviews[5] || [],
  },
  //protein
  {
    id: 6,
    name: '신타6 단백질 파우더 초코맛, 1.32kg, 1개',
    price: 63450,
    type: 'protein',
    description: `1일섭취량: 주황색 1정(1,000 mg), 연질 1캡슐(920mg), 경질 1캡슐(450 mg) 열량 13 kcal, 탄수화물 1g(0%), 단백질 0g(0%), 지방 0.1 g(2%), 나트륨 0mg(0%), 프로바이오틱스 수 10억 CFU, EPA와 DHA의 함 600 mg, 루테인 20mg, 비타민B, 6mg(500 %), 비타민B2 7mg(500%), 비타민Bg 7.5mg(500%), 비타민B12 24µg(1,000%), 나이아신 15mg(100 %), 판토텐산 5mg(100%), 비오틴 30µg(100%), 엽산 400µg DFE(100%), 비타민C 30mg(30%), 비타민E 5.5mg TE(50%), 비타민D 10µg(100%), 비타민K 70µg(100 %), 마그네슘 94.5mg(30%), 요오드 45 µg(30 %), 철 3.6mg(30 %), 아연 2.55 mg(30 %), 구리 0.24 mg(30 %), 셀렌27.5 g (50%), 크롬 10µg(33 %), 망간 0.9 mg(30 %), 몰리브덴 7.5µg(30%)
    ※( )안의 수치는 1일 영양성분기준치에 대한 비율`,
    images: [
      'https://image2.lotteimall.com/goods/21/36/29/1878293621_1.jpg/dims/resizemc/550x550/optimize',
      'https://thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/83767426380476-31175c29-c96f-48e8-9312-4417df9c3d11.jpg',
    ],
    reviewAmount: 4800,
    ProductReview: ProductReviews[6] || [],
  },
  {
    id: 7,
    name: '뉴욕웨이 올에이지 WPI 함유 미숫가루맛 단백질보충제 단백질쉐이크 산양유 프로틴, 1개, 2kg',
    price: 36900,
    type: 'protein',
    description: `1일섭취량: 주황색 1정(1,000 mg), 연질 1캡슐(920mg), 경질 1캡슐(450 mg) 열량 13 kcal, 탄수화물 1g(0%), 단백질 0g(0%), 지방 0.1 g(2%), 나트륨 0mg(0%), 프로바이오틱스 수 10억 CFU, EPA와 DHA의 함 600 mg, 루테인 20mg, 비타민B, 6mg(500 %), 비타민B2 7mg(500%), 비타민Bg 7.5mg(500%), 비타민B12 24µg(1,000%), 나이아신 15mg(100 %), 판토텐산 5mg(100%), 비오틴 30µg(100%), 엽산 400µg DFE(100%), 비타민C 30mg(30%), 비타민E 5.5mg TE(50%), 비타민D 10µg(100%), 비타민K 70µg(100 %), 마그네슘 94.5mg(30%), 요오드 45 µg(30 %), 철 3.6mg(30 %), 아연 2.55 mg(30 %), 구리 0.24 mg(30 %), 셀렌27.5 g (50%), 크롬 10µg(33 %), 망간 0.9 mg(30 %), 몰리브덴 7.5µg(30%)
    ※( )안의 수치는 1일 영양성분기준치에 대한 비율`,
    images: [
      'https://thumbnail.coupangcdn.com/thumbnails/remote/320x320q90ex/image/vendor_inventory/d569/2b1c65ad4c291aa394d50e272e98c83b8e76751676f5e01e2a148ad02755.png',
      'https://m.nutritionfactory.co.kr/web/upload/NNEditor/20230519/mobile/086e8a193d96d24bce42798670645a99_1684473864.jpg',
    ],
    reviewAmount: 315,
    ProductReview: ProductReviews[7] || [],
  },
  {
    id: 8,
    name: 'NS 웨이 프로틴 초코맛 단백질보충제, 1개 ,1000g',
    price: 33800,
    type: 'protein',
    description: `1일섭취량: 주황색 1정(1,000 mg), 연질 1캡슐(920mg), 경질 1캡슐(450 mg) 열량 13 kcal, 탄수화물 1g(0%), 단백질 0g(0%), 지방 0.1 g(2%), 나트륨 0mg(0%), 프로바이오틱스 수 10억 CFU, EPA와 DHA의 함 600 mg, 루테인 20mg, 비타민B, 6mg(500 %), 비타민B2 7mg(500%), 비타민Bg 7.5mg(500%), 비타민B12 24µg(1,000%), 나이아신 15mg(100 %), 판토텐산 5mg(100%), 비오틴 30µg(100%), 엽산 400µg DFE(100%), 비타민C 30mg(30%), 비타민E 5.5mg TE(50%), 비타민D 10µg(100%), 비타민K 70µg(100 %), 마그네슘 94.5mg(30%), 요오드 45 µg(30 %), 철 3.6mg(30 %), 아연 2.55 mg(30 %), 구리 0.24 mg(30 %), 셀렌27.5 g (50%), 크롬 10µg(33 %), 망간 0.9 mg(30 %), 몰리브덴 7.5µg(30%)
    ※( )안의 수치는 1일 영양성분기준치에 대한 비율`,
    images: [
      'https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/c0a6/295efe9f625f3ea917eaab6e4c86de835c16a0cfcb99183880dd404fb3b6.jpg',
      'https://sitem.ssgcdn.com/73/12/11/item/1000617111273_i1_750.jpg',
    ],
    reviewAmount: 662,
    ProductReview: ProductReviews[8] || [],
  },
  {
    id: 9,
    name: '더단백 드링크 초코, 250ml, 18개',
    price: 24200,
    type: 'protein',
    description: `1일섭취량: 주황색 1정(1,000 mg), 연질 1캡슐(920mg), 경질 1캡슐(450 mg) 열량 13 kcal, 탄수화물 1g(0%), 단백질 0g(0%), 지방 0.1 g(2%), 나트륨 0mg(0%), 프로바이오틱스 수 10억 CFU, EPA와 DHA의 함 600 mg, 루테인 20mg, 비타민B, 6mg(500 %), 비타민B2 7mg(500%), 비타민Bg 7.5mg(500%), 비타민B12 24µg(1,000%), 나이아신 15mg(100 %), 판토텐산 5mg(100%), 비오틴 30µg(100%), 엽산 400µg DFE(100%), 비타민C 30mg(30%), 비타민E 5.5mg TE(50%), 비타민D 10µg(100%), 비타민K 70µg(100 %), 마그네슘 94.5mg(30%), 요오드 45 µg(30 %), 철 3.6mg(30 %), 아연 2.55 mg(30 %), 구리 0.24 mg(30 %), 셀렌27.5 g (50%), 크롬 10µg(33 %), 망간 0.9 mg(30 %), 몰리브덴 7.5µg(30%)
    ※( )안의 수치는 1일 영양성분기준치에 대한 비율`,
    images: [
      'https://oasisprodproduct.edge.naverncp.com/100185/detail/0_0638778f-3834-45b4-b69c-cfe9e77afae1.jpg',
      'https://sitem.ssgcdn.com/54/99/33/item/1000407339954_i1_750.jpg',
    ],
    reviewAmount: 512,
    ProductReview: ProductReviews[9] || [],
  },
  {
    id: 10,
    name: '에버뉴트리 고단백 산양유 초유 콜라겐 단백질, 1개, 450g',
    price: 17510,
    type: 'protein',
    description: `1일섭취량: 주황색 1정(1,000 mg), 연질 1캡슐(920mg), 경질 1캡슐(450 mg) 열량 13 kcal, 탄수화물 1g(0%), 단백질 0g(0%), 지방 0.1 g(2%), 나트륨 0mg(0%), 프로바이오틱스 수 10억 CFU, EPA와 DHA의 함 600 mg, 루테인 20mg, 비타민B, 6mg(500 %), 비타민B2 7mg(500%), 비타민Bg 7.5mg(500%), 비타민B12 24µg(1,000%), 나이아신 15mg(100 %), 판토텐산 5mg(100%), 비오틴 30µg(100%), 엽산 400µg DFE(100%), 비타민C 30mg(30%), 비타민E 5.5mg TE(50%), 비타민D 10µg(100%), 비타민K 70µg(100 %), 마그네슘 94.5mg(30%), 요오드 45 µg(30 %), 철 3.6mg(30 %), 아연 2.55 mg(30 %), 구리 0.24 mg(30 %), 셀렌27.5 g (50%), 크롬 10µg(33 %), 망간 0.9 mg(30 %), 몰리브덴 7.5µg(30%)
    ※( )안의 수치는 1일 영양성분기준치에 대한 비율`,
    images: [
      'https://asset.m-gs.kr/prod/1061513516/1/550',
      'https://asset.m-gs.kr/prod/1061513544/1/550',
    ],
    reviewAmount: 233,
    ProductReview: ProductReviews[10] || [],
  },

  //magnesium
  {
    id: 11,
    name: '뉴트리디데이 메가렉스 마그네슘 400, 90정, 2개',
    price: 19990,
    type: 'magnesium',
    description: `1일섭취량: 주황색 1정(1,000 mg), 연질 1캡슐(920mg), 경질 1캡슐(450 mg) 열량 13 kcal, 탄수화물 1g(0%), 단백질 0g(0%), 지방 0.1 g(2%), 나트륨 0mg(0%), 프로바이오틱스 수 10억 CFU, EPA와 DHA의 함 600 mg, 루테인 20mg, 비타민B, 6mg(500 %), 비타민B2 7mg(500%), 비타민Bg 7.5mg(500%), 비타민B12 24µg(1,000%), 나이아신 15mg(100 %), 판토텐산 5mg(100%), 비오틴 30µg(100%), 엽산 400µg DFE(100%), 비타민C 30mg(30%), 비타민E 5.5mg TE(50%), 비타민D 10µg(100%), 비타민K 70µg(100 %), 마그네슘 94.5mg(30%), 요오드 45 µg(30 %), 철 3.6mg(30 %), 아연 2.55 mg(30 %), 구리 0.24 mg(30 %), 셀렌27.5 g (50%), 크롬 10µg(33 %), 망간 0.9 mg(30 %), 몰리브덴 7.5µg(30%)
    ※( )안의 수치는 1일 영양성분기준치에 대한 비율`,
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBqBXFK3JJockQdcfhlDJG_cRBrPXNOsboDA&s',
      'https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/53217955439760-b037fb2a-2012-4a0f-a590-5d8e4935f8e6.jpg',
    ],
    reviewAmount: 233,
    ProductReview: ProductReviews[11] || [],
  },
  {
    id: 12,
    name: '종근당 칼슘 앤 마그네슘 비타민D 아연, 180정, 1개',
    price: 12550,
    type: 'magnesium',
    description: `1일섭취량: 주황색 1정(1,000 mg), 연질 1캡슐(920mg), 경질 1캡슐(450 mg) 열량 13 kcal, 탄수화물 1g(0%), 단백질 0g(0%), 지방 0.1 g(2%), 나트륨 0mg(0%), 프로바이오틱스 수 10억 CFU, EPA와 DHA의 함 600 mg, 루테인 20mg, 비타민B, 6mg(500 %), 비타민B2 7mg(500%), 비타민Bg 7.5mg(500%), 비타민B12 24µg(1,000%), 나이아신 15mg(100 %), 판토텐산 5mg(100%), 비오틴 30µg(100%), 엽산 400µg DFE(100%), 비타민C 30mg(30%), 비타민E 5.5mg TE(50%), 비타민D 10µg(100%), 비타민K 70µg(100 %), 마그네슘 94.5mg(30%), 요오드 45 µg(30 %), 철 3.6mg(30 %), 아연 2.55 mg(30 %), 구리 0.24 mg(30 %), 셀렌27.5 g (50%), 크롬 10µg(33 %), 망간 0.9 mg(30 %), 몰리브덴 7.5µg(30%)
    ※( )안의 수치는 1일 영양성분기준치에 대한 비율`,
    images: [
      'https://img.danawa.com/prod_img/500000/606/985/img/5985606_1.jpg?_v=20240111151657',
      'https://sitem.ssgcdn.com/43/25/00/item/1000026002543_i1_750.jpg',
    ],
    reviewAmount: 278,
    ProductReview: ProductReviews[12] || [],
  },
  {
    id: 13,
    name: '뉴트리디데이 프리미엄 갈슘 마그네슘 아연 비타민D, 90정, 1개',
    price: 10900,
    type: 'magnesium',
    description: `1일섭취량: 주황색 1정(1,000 mg), 연질 1캡슐(920mg), 경질 1캡슐(450 mg) 열량 13 kcal, 탄수화물 1g(0%), 단백질 0g(0%), 지방 0.1 g(2%), 나트륨 0mg(0%), 프로바이오틱스 수 10억 CFU, EPA와 DHA의 함 600 mg, 루테인 20mg, 비타민B, 6mg(500 %), 비타민B2 7mg(500%), 비타민Bg 7.5mg(500%), 비타민B12 24µg(1,000%), 나이아신 15mg(100 %), 판토텐산 5mg(100%), 비오틴 30µg(100%), 엽산 400µg DFE(100%), 비타민C 30mg(30%), 비타민E 5.5mg TE(50%), 비타민D 10µg(100%), 비타민K 70µg(100 %), 마그네슘 94.5mg(30%), 요오드 45 µg(30 %), 철 3.6mg(30 %), 아연 2.55 mg(30 %), 구리 0.24 mg(30 %), 셀렌27.5 g (50%), 크롬 10µg(33 %), 망간 0.9 mg(30 %), 몰리브덴 7.5µg(30%)
    ※( )안의 수치는 1일 영양성분기준치에 대한 비율`,
    images: [
      'https://img.danawa.com/prod_img/500000/252/834/img/5834252_1.jpg?_v=20200615122252',
      'https://sitem.ssgcdn.com/87/14/15/item/1000295151487_i1_750.jpg',
    ],
    reviewAmount: 379,
    ProductReview: ProductReviews[13] || [],
  },
  {
    id: 14,
    name: '나우푸드 마그네슘 캡 400mg 베지캡슐, 180정,1개',
    price: 14070,
    type: 'magnesium',
    description: `1일섭취량: 주황색 1정(1,000 mg), 연질 1캡슐(920mg), 경질 1캡슐(450 mg) 열량 13 kcal, 탄수화물 1g(0%), 단백질 0g(0%), 지방 0.1 g(2%), 나트륨 0mg(0%), 프로바이오틱스 수 10억 CFU, EPA와 DHA의 함 600 mg, 루테인 20mg, 비타민B, 6mg(500 %), 비타민B2 7mg(500%), 비타민Bg 7.5mg(500%), 비타민B12 24µg(1,000%), 나이아신 15mg(100 %), 판토텐산 5mg(100%), 비오틴 30µg(100%), 엽산 400µg DFE(100%), 비타민C 30mg(30%), 비타민E 5.5mg TE(50%), 비타민D 10µg(100%), 비타민K 70µg(100 %), 마그네슘 94.5mg(30%), 요오드 45 µg(30 %), 철 3.6mg(30 %), 아연 2.55 mg(30 %), 구리 0.24 mg(30 %), 셀렌27.5 g (50%), 크롬 10µg(33 %), 망간 0.9 mg(30 %), 몰리브덴 7.5µg(30%)
    ※( )안의 수치는 1일 영양성분기준치에 대한 비율`,
    images: [
      'https://thumbnail9.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/4df2/93f30cdc285c2c182b541a9403e38352acbe8e8cdbe116d9e0e05f9535d9.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCrDfSeM8J5G-iY7ixxRjfA_kj6g37CkltLg&s',
    ],
    reviewAmount: 194,
    ProductReview: ProductReviews[14] || [],
  },
  {
    id: 15,
    name: '세노비스 마그네슘, 90정, 1개',
    price: 16500,
    type: 'magnesium',
    description: `1일섭취량: 주황색 1정(1,000 mg), 연질 1캡슐(920mg), 경질 1캡슐(450 mg) 열량 13 kcal, 탄수화물 1g(0%), 단백질 0g(0%), 지방 0.1 g(2%), 나트륨 0mg(0%), 프로바이오틱스 수 10억 CFU, EPA와 DHA의 함 600 mg, 루테인 20mg, 비타민B, 6mg(500 %), 비타민B2 7mg(500%), 비타민Bg 7.5mg(500%), 비타민B12 24µg(1,000%), 나이아신 15mg(100 %), 판토텐산 5mg(100%), 비오틴 30µg(100%), 엽산 400µg DFE(100%), 비타민C 30mg(30%), 비타민E 5.5mg TE(50%), 비타민D 10µg(100%), 비타민K 70µg(100 %), 마그네슘 94.5mg(30%), 요오드 45 µg(30 %), 철 3.6mg(30 %), 아연 2.55 mg(30 %), 구리 0.24 mg(30 %), 셀렌27.5 g (50%), 크롬 10µg(33 %), 망간 0.9 mg(30 %), 몰리브덴 7.5µg(30%)
    ※( )안의 수치는 1일 영양성분기준치에 대한 비율`,
    images: [
      'https://image2.lotteimall.com/goods/25/21/77/2725772125_1.jpg/dims/resizemc/550x550/optimize',
      'https://sitem.ssgcdn.com/08/03/83/item/1000518830308_i1_750.jpg',
    ],
    reviewAmount: 671,
    ProductReview: ProductReviews[15] || [],
  },
];
