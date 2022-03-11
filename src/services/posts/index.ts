export interface IPostData {
  id: number;
  post_info: {
    title: string;
    date: string;
  };
  album_info: {
    title: string;
    date: string;
  };
  author: string;
  thumbnail: string;
  gallery: string[];
}

export const postsData: IPostData[] = [
  {
    id: 1,
    post_info: {
      title: 'Barra da Tijuca - Posto 6 - Rio de Janeiro, RJ - Brasil',
      date: 'Sábado, 17 abril 2021 - 07 às 10h',
    },
    album_info: {
      title: 'Barra da Tijuca, Rio de Janeiro - RJ',
      date: 'Hoje, Sábado, 17 abril 2021 - 07 às 10h',
    },
    author: 'yurigargarin',
    thumbnail:
      'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VyZnxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60',
    gallery: [
      'https://images.unsplash.com/photo-1515541324332-7dd0c37426e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VyZnxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1616449973117-0e1d99c56ed3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3VyZnxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1509914398892-963f53e6e2f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3VyZnxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1501949997128-2fdb9f6428f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3VyZnxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1505459668311-8dfac7952bf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3VyZnxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1455729552865-3658a5d39692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHN1cmZ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1526342122811-2a9c8512023d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHN1cmZ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1535182463927-440364075d9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3VyZnxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1502933691298-84fc14542831?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1cmZ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1526342256246-b67e94be5c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1cmZ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1475706997440-9f2a24435b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHN1cmZ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1505937059382-aab581fd88c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHN1cmZ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1529410804717-979530809e26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHN1cmZ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1455264745730-cb3b76250ae8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHN1cmZ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1544648139-fbc3c2ba969b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHN1cmZ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
    ],
  },
  {
    id: 2,
    post_info: {
      title: 'Praia do Meio - Natal, RN - Brasil',
      date: 'Sábado, 17 abril 2021 - 07 às 10h',
    },
    album_info: {
      title: 'Praia do Meio - Natal, RN',
      date: 'Hoje, Sábado, 17 abril 2021 - 07 às 10h',
    },
    author: 'Manoel',
    thumbnail:
      'https://images.unsplash.com/photo-1535182463927-440364075d9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3VyZnxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60',
    gallery: [
      'https://images.unsplash.com/photo-1502933691298-84fc14542831?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1cmZ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1526342256246-b67e94be5c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1cmZ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1526342122811-2a9c8512023d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHN1cmZ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1475706997440-9f2a24435b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHN1cmZ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1505937059382-aab581fd88c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHN1cmZ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1529410804717-979530809e26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHN1cmZ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1455729552865-3658a5d39692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHN1cmZ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1526342122811-2a9c8512023d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHN1cmZ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1535182463927-440364075d9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3VyZnxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60',
    ],
  },
  {
    id: 3,
    post_info: {
      title: 'Barra da Tijuca - Posto 6 - Rio de Janeiro, RJ - Brasil',
      date: 'Sábado, 17 abril 2021 - 07 às 10h',
    },
    album_info: {
      title: 'Barra da Tijuca, Rio de Janeiro - RJ',
      date: 'Hoje, Sábado, 17 abril 2021 - 07 às 10h',
    },
    author: 'yurigargarin',
    thumbnail:
      'https://images.unsplash.com/photo-1509914398892-963f53e6e2f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3VyZnxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60',

    gallery: [
      'https://images.unsplash.com/photo-1505459668311-8dfac7952bf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3VyZnxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1455729552865-3658a5d39692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHN1cmZ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1526342122811-2a9c8512023d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHN1cmZ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1535182463927-440364075d9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3VyZnxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1502933691298-84fc14542831?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1cmZ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1526342256246-b67e94be5c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1cmZ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1475706997440-9f2a24435b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHN1cmZ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1515541324332-7dd0c37426e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VyZnxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1616449973117-0e1d99c56ed3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3VyZnxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1509914398892-963f53e6e2f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3VyZnxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1501949997128-2fdb9f6428f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3VyZnxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1505937059382-aab581fd88c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHN1cmZ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1529410804717-979530809e26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHN1cmZ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1455264745730-cb3b76250ae8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHN1cmZ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1544648139-fbc3c2ba969b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHN1cmZ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
    ],
  },
  {
    id: 4,
    post_info: {
      title: 'Praia do Meio - Natal, RN - Brasil',
      date: 'Sábado, 17 abril 2021 - 07 às 10h',
    },
    album_info: {
      title: 'Praia do Meio - Natal, RN',
      date: 'Hoje, Sábado, 17 abril 2021 - 07 às 10h',
    },
    author: 'Manoel',
    thumbnail:
      'https://images.unsplash.com/photo-1502933691298-84fc14542831?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1cmZ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',

    gallery: [
      'https://images.unsplash.com/photo-1505459668311-8dfac7952bf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3VyZnxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1505937059382-aab581fd88c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHN1cmZ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1529410804717-979530809e26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHN1cmZ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1526342256246-b67e94be5c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1cmZ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1475706997440-9f2a24435b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHN1cmZ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
      'https://images.unsplash.com/photo-1505459668311-8dfac7952bf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3VyZnxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60',
    ],
  },
];
