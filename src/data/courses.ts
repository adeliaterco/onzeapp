export interface CourseItem {
  id: string;
  title: string;
  type: 'video' | 'pdf' | 'link';
  url: string;
}

export interface Course {
  id: string;
  title: string;
  thumbnail: string;
  link: string;
  items: CourseItem[];
}

export const courses: Course[] = [
  {
    id: '1',
    title: 'Plan A: Reconquista en 21 Días',
    thumbnail: 'https://i.ibb.co/CK8F67my/Editedimage-1765052659367.png',
    link: 'https://semloginplan.vercel.app/',
    items: [
      {
        id: '1-1',
        title: 'Módulo 1 - Diagnóstico',
        type: 'video',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        id: '1-2',
        title: 'Cronograma 21 Días',
        type: 'pdf',
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
      },
      {
        id: '1-3',
        title: 'Casos de Estudio',
        type: 'link',
        url: 'https://comprarplanseguro.shop/plan-a/'
      }
    ]
  },
  {
    id: '2',
    title: '15 Maneras Irresistibles en WhatsApp',
    thumbnail: 'https://comprarplanseguro.shop/wp-content/uploads/2025/06/imagem_gerada-2025-06-12T001538.498.png',
    link: 'https://comprarplanseguro.shop/15-maneras/',
    items: [
      {
        id: '2-1',
        title: 'Las 15 Técnicas Probadas',
        type: 'video',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        id: '2-2',
        title: 'Guía de Comunicación Digital',
        type: 'pdf',
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
      },
      {
        id: '2-3',
        title: 'Acceder al Contenido',
        type: 'link',
        url: 'https://comprarplanseguro.shop/15-maneras/'
      }
    ]
  },
  {
    id: '3',
    title: 'Protocolo de Dominancia Emocional',
    thumbnail: 'https://comprarplanseguro.shop/wp-content/uploads/2025/06/imagem_gerada-2025-06-11T090923.835.png',
    link: 'https://comprarplanseguro.shop/protocolo/',
    items: [
      {
        id: '3-1',
        title: 'Los 7 Disparadores de Obsesión',
        type: 'video',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        id: '3-2',
        title: '21 Frases de Dominancia',
        type: 'pdf',
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
      },
      {
        id: '3-3',
        title: 'Acceder al Protocolo',
        type: 'link',
        url: 'https://comprarplanseguro.shop/protocolo/'
      }
    ]
  },
  {
    id: '4',
    title: 'Sistema de Blindaje',
    thumbnail: 'https://comprarplanseguro.shop/wp-content/uploads/2025/06/imagem_gerada-2025-06-10T233008.344.png',
    link: 'https://comprarplanseguro.shop/blindaje/',
    items: [
      {
        id: '4-1',
        title: 'Blindaje Total de Relación',
        type: 'video',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        id: '4-2',
        title: 'Inmunidad Contra Otros Hombres',
        type: 'pdf',
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
      },
      {
        id: '4-3',
        title: 'Acceder al Sistema',
        type: 'link',
        url: 'https://comprarplanseguro.shop/blindaje/'
      }
    ]
  }
];
