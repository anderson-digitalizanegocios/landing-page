import type { ChangeEvent, FormEvent } from "react"
import { useMemo, useState } from "react"
import {
  ArrowRight,
  AtSign,
  BadgeCheck,
  BriefcaseBusiness,
  Camera,
  ChartColumn,
  ClipboardPenLine,
  ExternalLink,
  Globe,
  LayoutTemplate,
  MessageCircleMore,
  Play,
  Store,
} from "lucide-react"

const instagramUrl = "https://www.instagram.com/jairscc_/"
const whatsappNumber = "5581982141177"
const profileImage =
  "https://scontent.cdninstagram.com/v/t51.82787-19/683928979_18439591636188280_2305869660032127901_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=100&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy44OTYuQzMifQ%3D%3D&_nc_ohc=ILpvkjOWqRIQ7kNvwG7ThOb&_nc_oc=AdpzVYIWwfHwr3PRt0QRflvwG_JB1A1l230NP9o3R394U1NmJcaBtHBRGgaI2Rq9mp5gsSDZbchy2Vb9GrdLtG0b&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=FGUNvE_QlehrX9IErhEckQ&_nc_ss=79689&oh=00_AQDdMDSHfvbeAy20NPu02mBIJLXJKtg29j3igvrOpFMUJg&oe=6A6E7F6E"

const metrics = [
  { value: "+1.000", label: "seguidores acompanhando o trabalho no Instagram" },
  { value: "Sites", label: "paginas focadas em apresentar e converter" },
  { value: "Catalogos", label: "vendas organizadas com experiencia simples" },
  { value: "CRM", label: "processos comerciais mais visiveis e escalaveis" },
]

const works = [
  {
    icon: Globe,
    title: "Sites comerciais de alta conversao",
    description:
      "Paginas estrategicas para apresentar servicos, gerar autoridade e transformar visitas em pedidos de contato.",
    bullets: [
      "Hero forte e objetivo",
      "CTA visivel desde a dobra",
      "Estrutura pronta para trafego pago",
    ],
  },
  {
    icon: LayoutTemplate,
    title: "Catalogos digitais para vender melhor",
    description:
      "Catalogos organizados para moda, beleza, atacado e varejo, com foco em rapidez, clareza e facilidade no pedido.",
    bullets: [
      "Produtos bem apresentados",
      "Fluxo pensado para WhatsApp",
      "Experiencia simples para o cliente final",
    ],
  },
  {
    icon: Store,
    title: "Operacao integrada para loja fisica e online",
    description:
      "Estruturas que conectam atendimento, pedidos e rotina comercial para dar mais controle e menos retrabalho.",
    bullets: [
      "PDV e venda de balcao",
      "Historico de pedidos",
      "Organizacao para o dia a dia da equipe",
    ],
  },
  {
    icon: ChartColumn,
    title: "Processos de vendas e CRM na pratica",
    description:
      "Organizacao do funil comercial para acompanhar oportunidades, acelerar respostas e manter o time produtivo.",
    bullets: [
      "Leads mais bem acompanhados",
      "Etapas comerciais claras",
      "Base pronta para crescimento",
    ],
  },
]

const featuredMedia = [
  {
    type: "video",
    title: "Loja online pronta para vender",
    description:
      "Video do perfil mostrando a proposta de entregar a loja pronta, equipe treinada e operacao acompanhada.",
    href: "https://www.instagram.com/jairscc_/reel/DbEWEXgvhgW/",
    preview:
      "https://scontent.cdninstagram.com/v/t51.71878-15/752178033_1594373665394669_729992640633888833_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=105&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=BCX-eHkQaxAQ7kNvwEemv7m&_nc_oc=Adpadp-wvz-HM4lcbEM3cOzCSFIkMmQHM95yiIG2DHzZ0teWtZ1Neg8LPki3Z81Q5pP2wKdWxj86Qal0AvV1uaN1&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=EfoU0sPebFmUWkGzQbVr-g&_nc_ss=79689&oh=00_AQD50XH4vn7BbsWwwiys7SdCY-LdWlNjZCyhgYwSP5puKA&oe=6A6E7065",
    video:
      "https://instagram.fcau5-1.fna.fbcdn.net/o1/v/t2/f2/m367/AQNzT-6vkL4Fwe_elV_wEF5_WSos6wGTKmskF7eSEvCh3XnPQaydX_D_budHwcIEKLpGEAnRs0UqfZzn29L7usDoynZmmh_Qwc_OLdhZoOj_wA.mp4?_nc_cat=102&_nc_oc=AdpNvZT-zmNGMZQw3SPf4bCXxit8nw_EyMBbd1Ra6Lvn67niPdSiOjyk1HkHr8QiSnTO0k82R-V_joVkPQ4SYNDR&_nc_sid=9ca052&_nc_ht=instagram.fcau5-1.fna.fbcdn.net&_nc_ohc=vCqk4qm7_2kQ7kNvwExDax_&efg=eyJ2ZW5jb2RlX3RhZyI6ImlnLXhwdmRzLmNsaXBzLmlnd3d3LUMzLmRhc2hfdnA5LWJhc2ljLWdlbjJfMTA4MHAiLCJ2aWRlb19pZCI6bnVsbCwib2lsX3VybGdlbl9hcHBfaWQiOjkzNjYxOTc0MzM5MjQ1OSwiY2xpZW50X25hbWUiOiJpZyIsInhwdl9hc3NldF9pZCI6Mjg5NTAwMDM4NDE2NjI1MywiYXNzZXRfYWdlX2RheXMiOjYsInZpX3VzZWNhc2VfaWQiOjEwODI3LCJkdXJhdGlvbl9zIjozMiwiYml0cmF0ZSI6OTg2NzU1LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&_nc_gid=FSB-yvjt5rtg0rBKa2gByQ&_nc_ss=79689&_nc_zt=28&oh=00_AQBujhTfV2dZiKzencbWc3epdKE_WnwdiMmBylxIpYawgw&oe=6A6E71E6",
  },
  {
    type: "video",
    title: "Conteudo para moda atacado",
    description:
      "Video voltado para moda e vendas online, reforcando posicionamento e linguagem comercial do segmento.",
    href: "https://www.instagram.com/jairscc_/reel/DZz_sLFOs2R/",
    preview:
      "https://instagram.fcau5-1.fna.fbcdn.net/v/t51.71878-15/727267430_994821733312522_1220459486792335817_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=103&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNMSVBTLnhwaWRzLjY0MC5zZHIudmlkZW9fYWRkaXRpb25hbF9jb3Zlcl9mcmFtZS5DMyJ9&_nc_ohc=eiSdRda-QiQQ7kNvwHl4jdg&_nc_oc=AdrxXcoFytdTOadPQAHALGklB1v5eqtSFqcZYV8c5kfULRb2qjIwP4YwlFUGrbtlBEAjPm9XdGBbHYInlJmbyqem&_nc_zt=23&_nc_ht=instagram.fcau5-1.fna&_nc_gid=yBqRw5UC_M0JoWr61rjQ8Q&_nc_ss=79689&oh=00_AQCUY_Efj-9A9JSvYqyaDb8XvEuU26tWrJkoco5d0rHnCg&oe=6A6E6429",
    video:
      "https://instagram.fcau5-1.fna.fbcdn.net/o1/v/t2/f2/m86/AQMCgrvKIsqDk_5ztZ2zYkfPCA_lfK7L5nm1_WeYlbJxonHujMfLc4Jb_lJEHvjML-Kk5Kt1qBNP6gNNW9JQERcfhj9w2xKQj_TtsfQ.mp4?_nc_cat=107&_nc_oc=AdqQFnX-blZCPIU7Qn9eza6Suu0DGK1_6gJSYBlKzdiSYhyC_LXoTNleET7PR5J_MgAUHJ5qpP-Nu2cMxIpigETL&_nc_sid=9ca052&_nc_ht=instagram.fcau5-1.fna.fbcdn.net&_nc_ohc=TOC8pQuwUmIQ7kNvwHz7bgr&efg=eyJ2ZW5jb2RlX3RhZyI6ImlnLXhwdmRzLmNsaXBzLmlnd3d3LUMzLmRhc2hfYmFzZWxpbmVfMV92MSIsInZpZGVvX2lkIjpudWxsLCJvaWxfdXJsZ2VuX2FwcF9pZCI6OTM2NjE5NzQzMzkyNDU5LCJjbGllbnRfbmFtZSI6ImlnIiwieHB2X2Fzc2V0X2lkIjo4NTQxNjIyOTM5OTkyMzEsImFzc2V0X2FnZV9kYXlzIjozNywidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjU1LCJiaXRyYXRlIjoxODE0Nzg1LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&_nc_gid=yBqRw5UC_M0JoWr61rjQ8Q&_nc_ss=79689&_nc_zt=28&oh=00_AQCy5c8dJtrXq56d_aMvkU4EycjZZLkccoILFAAwepCFSg&oe=6A6A7D74",
  },
  {
    type: "image",
    title: "Peca visual de comunicacao",
    description:
      "Imagem real publicada com foco em identidade e comunicacao da marca dentro do ecossistema da FacilZap.",
    href: "https://www.instagram.com/facilzapoficial/p/DaVuX_7EU2B/",
    preview:
      "https://scontent.cdninstagram.com/v/t51.82787-15/734872029_18074366687661656_4902362115276816463_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=104&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=736kQN6-tcEQ7kNvwHFEZmp&_nc_oc=AdpY7qlVJr442hRJWvVEK6CEMXtB2fIocyNW1ss-yYXBxeQat4RdjgZFZvUto2MhAiLgw8UIwPkdgdbaNPpTqDNF&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=EfoU0sPebFmUWkGzQbVr-g&_nc_ss=79689&oh=00_AQDxOkrd3Vy5S3jn0nsI1A7xF8zpfl_sbtEjLTxcKxU7gg&oe=6A6E72B7",
  },
]

const steps = [
  {
    number: "01",
    title: "Diagnostico da operacao",
    description:
      "Entendimento do seu momento atual, do tipo de cliente que voce atende e de onde estao travando suas vendas.",
  },
  {
    number: "02",
    title: "Estrutura digital sob medida",
    description:
      "Definicao da melhor combinacao entre site, catalogo, CRM e processo comercial para o seu objetivo.",
  },
  {
    number: "03",
    title: "Entrega pronta para vender",
    description:
      "Implementacao com foco em clareza, velocidade e um fluxo comercial que seja facil de usar no dia a dia.",
  },
]

const audiences = [
  "Lojistas que querem vender pelo WhatsApp com mais organizacao",
  "Marcas que precisam de um site profissional para apresentar servicos",
  "Operacoes que ja vendem, mas ainda perdem tempo e oportunidades no processo",
]

type FormData = {
  nome: string
  empresa: string
  segmento: string
  telefone: string
  objetivo: string
}

const initialFormData: FormData = {
  nome: "",
  empresa: "",
  segmento: "",
  telefone: "",
  objetivo: "",
}

export function App() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [submitted, setSubmitted] = useState(false)

  const whatsappLink = useMemo(() => {
    const message = [
      "Ola, Jair! Vim pela landing page e quero falar sobre um projeto.",
      "",
      `Nome: ${formData.nome || "-"}`,
      `Empresa: ${formData.empresa || "-"}`,
      `Segmento: ${formData.segmento || "-"}`,
      `Telefone: ${formData.telefone || "-"}`,
      "Objetivo:",
      formData.objetivo || "-",
    ].join("\n")

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
  }, [formData])

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
    window.open(whatsappLink, "_blank", "noopener,noreferrer")
  }

  return (
    <main className="relative overflow-hidden bg-[#f7fbff] text-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-[-8%] h-[32rem] w-[32rem] rounded-full bg-sky-200/70 blur-3xl" />
        <div className="absolute top-24 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-cyan-100 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.16),transparent_52%)]" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-6 md:px-10 lg:px-12">
        <header className="mb-10 flex flex-col gap-4 rounded-full border border-sky-200 bg-white/80 px-5 py-4 shadow-sm shadow-sky-100/70 backdrop-blur md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs tracking-[0.32em] text-sky-700 uppercase">
              Jair SCC
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Especialista em sites, catalogos e processos de venda online
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-sky-200 px-4 py-2 text-sm text-slate-700 transition hover:border-sky-300 hover:bg-sky-50"
            >
              <AtSign className="size-4" />
              Ver Instagram
            </a>
            <a
              href="#interesse"
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-500"
            >
              Quero um projeto
              <ArrowRight className="size-4" />
            </a>
          </div>
        </header>

        <section className="grid items-center gap-10 pt-6 pb-18 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs tracking-[0.28em] text-sky-700 uppercase shadow-sm">
              <BadgeCheck className="size-4" />
              Estrategia digital com foco em vendas
            </div>

            <h1 className="max-w-4xl text-5xl leading-none font-[var(--font-heading)] tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-7xl">
              Presenca digital clara, bonita e pronta para converter.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Jair cria sites, catalogos digitais e estruturas de venda que
              deixam a operacao mais organizada, mais profissional e muito mais
              preparada para gerar contato.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#midias"
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Ver midias reais
                <ArrowRight className="size-4" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-sky-300 hover:bg-sky-50"
              >
                <MessageCircleMore className="size-4" />
                Falar no WhatsApp
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {metrics.map((metric) => (
                <div
                  key={metric.value}
                  className="rounded-3xl border border-sky-100 bg-white p-5 shadow-sm shadow-sky-100/70"
                >
                  <p className="text-2xl font-[var(--font-heading)] tracking-[-0.04em] text-slate-950">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[2rem] border border-sky-100 bg-white p-6 shadow-xl shadow-sky-100/80">
              <div className="flex items-start gap-4">
                <img
                  src={profileImage}
                  alt="Foto de perfil do Jair"
                  className="size-20 rounded-3xl object-cover ring-4 ring-sky-100"
                />
                <div>
                  <p className="text-xs tracking-[0.28em] text-sky-700 uppercase">
                    Perfil profissional
                  </p>
                  <h2 className="mt-2 text-3xl font-[var(--font-heading)] tracking-[-0.05em] text-slate-950">
                    Jair SCC
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    "Transformo sua visao em vendas" resume bem a proposta:
                    tirar o digital do improviso e colocar a empresa numa
                    estrutura mais clara, bonita e funcional.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {[
                  {
                    icon: BriefcaseBusiness,
                    title: "Diagnostico do negocio",
                    text: "Leitura do momento da operacao e dos gargalos de venda.",
                  },
                  {
                    icon: ClipboardPenLine,
                    title: "Estrutura comercial",
                    text: "Site, catalogo e caminho de contato desenhados para converter.",
                  },
                  {
                    icon: ChartColumn,
                    title: "Processo com visibilidade",
                    text: "Organizacao do atendimento e da rotina comercial.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-slate-100 bg-slate-50 p-4"
                  >
                    <div className="inline-flex rounded-2xl bg-sky-100 p-3 text-sky-700">
                      <item.icon className="size-5" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-cyan-100 bg-[linear-gradient(135deg,#ecfeff,#f8fafc)] p-6 shadow-sm shadow-cyan-100/80">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs tracking-[0.28em] text-cyan-700 uppercase">
                    Conteudo real do perfil
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Videos e imagem reais do Instagram, integrados para deixar a
                    landing mais viva e mais conectada com o trabalho publicado.
                  </p>
                </div>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50"
                >
                  Abrir perfil
                  <ExternalLink className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="midias"
          className="grid gap-8 border-t border-sky-100 py-18 lg:grid-cols-[0.82fr_1.18fr]"
        >
          <div>
            <p className="text-sm tracking-[0.32em] text-sky-700 uppercase">
              Midias do profissional
            </p>
            <h2 className="mt-4 max-w-md text-4xl font-[var(--font-heading)] tracking-[-0.05em] text-slate-950 sm:text-5xl">
              Videos e imagem reais diretamente do trabalho publicado.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
              Em vez de usar mockups, a landing agora mostra conteudo real do
              perfil para reforcar estilo, linguagem e autoridade.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {featuredMedia.map((item, index) => (
              <article
                key={item.href}
                className={`overflow-hidden rounded-[1.75rem] border border-sky-100 bg-white shadow-sm shadow-sky-100/80 ${
                  index === 2 ? "md:col-span-2" : ""
                }`}
              >
                <div className="relative bg-slate-100">
                  {item.type === "video" ? (
                    <>
                      <video
                        controls
                        preload="metadata"
                        poster={item.preview}
                        className="aspect-[4/5] w-full bg-slate-950 object-cover"
                      >
                        <source src={item.video} type="video/mp4" />
                      </video>
                      <div className="pointer-events-none absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-medium text-white">
                        <Play className="size-3.5 fill-current" />
                        Video real
                      </div>
                    </>
                  ) : (
                    <>
                      <img
                        src={item.preview}
                        alt={item.title}
                        className="aspect-[16/10] w-full object-cover"
                      />
                      <div className="pointer-events-none absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-900">
                        <Camera className="size-3.5" />
                        Imagem real
                      </div>
                    </>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 transition hover:text-sky-800"
                  >
                    Ver no Instagram
                    <ExternalLink className="size-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="trabalhos"
          className="grid gap-8 border-t border-sky-100 py-18 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <p className="text-sm tracking-[0.32em] text-sky-700 uppercase">
              Trabalhos realizados
            </p>
            <h2 className="mt-4 max-w-md text-4xl font-[var(--font-heading)] tracking-[-0.05em] text-slate-950 sm:text-5xl">
              Entregas pensadas para vender e organizar a operacao.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
              A proposta aqui nao e apenas deixar bonito. Cada projeto junta
              apresentacao, processo e caminho de contato para gerar mais
              aproveitamento comercial.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {works.map((work) => (
              <article
                key={work.title}
                className="group rounded-[1.75rem] border border-sky-100 bg-white p-6 shadow-sm shadow-sky-100/80 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="inline-flex rounded-2xl bg-sky-100 p-3 text-sky-700">
                  <work.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                  {work.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {work.description}
                </p>
                <ul className="mt-5 space-y-3 text-sm text-slate-800">
                  {work.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-1 size-2 rounded-full bg-sky-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 border-t border-sky-100 py-18 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-sm tracking-[0.32em] text-sky-700 uppercase">
              Como funciona
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-[var(--font-heading)] tracking-[-0.05em] text-slate-950 sm:text-5xl">
              Um processo direto para transformar ideia em estrutura comercial.
            </h2>
          </div>

          <div className="space-y-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-[1.75rem] border border-sky-100 bg-white p-6 shadow-sm shadow-sky-100/80"
              >
                <p className="text-sm tracking-[0.3em] text-sky-700 uppercase">
                  {step.number}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 border-t border-sky-100 py-18 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm tracking-[0.32em] text-sky-700 uppercase">
              Para quem e
            </p>
            <h2 className="mt-4 max-w-lg text-4xl font-[var(--font-heading)] tracking-[-0.05em] text-slate-950 sm:text-5xl">
              Ideal para negocios que ja perceberam que improviso nao escala.
            </h2>
          </div>

          <div className="grid gap-4">
            {audiences.map((audience) => (
              <div
                key={audience}
                className="flex items-start gap-4 rounded-[1.6rem] border border-sky-100 bg-white p-5 shadow-sm shadow-sky-100/80"
              >
                <BadgeCheck className="mt-1 size-5 text-sky-700" />
                <p className="text-base leading-7 text-slate-700">{audience}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="interesse"
          className="grid gap-8 border-t border-sky-100 py-18 lg:grid-cols-[0.88fr_1.12fr]"
        >
          <div>
            <p className="text-sm tracking-[0.32em] text-sky-700 uppercase">
              Formulario de interesse
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-[var(--font-heading)] tracking-[-0.05em] text-slate-950 sm:text-5xl">
              Conte seu objetivo e abra a conversa com a mensagem pronta.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
              Ao enviar o formulario, a pagina abre o WhatsApp do Jair com suas
              informacoes preenchidas para agilizar o primeiro contato.
            </p>

            <div className="mt-8 rounded-[1.75rem] border border-cyan-100 bg-cyan-50 p-6">
              <p className="text-sm tracking-[0.28em] text-cyan-800 uppercase">
                Canal direto
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-3 text-xl font-semibold text-slate-950 transition hover:text-sky-700"
              >
                <MessageCircleMore className="size-5" />
                WhatsApp para atendimento comercial
              </a>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Tambem e possivel seguir pelo Instagram para acompanhar o estilo
                de trabalho e as entregas publicadas.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-sky-100 bg-white p-6 shadow-sm shadow-sky-100/80 md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm text-slate-600">
                  Seu nome
                </span>
                <input
                  required
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Como voce quer se apresentar"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-300 focus:outline-none"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-slate-600">
                  Empresa
                </span>
                <input
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  placeholder="Nome da sua empresa ou marca"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-300 focus:outline-none"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-slate-600">
                  Segmento
                </span>
                <input
                  name="segmento"
                  value={formData.segmento}
                  onChange={handleChange}
                  placeholder="Ex.: moda, beleza, servicos, atacado"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-300 focus:outline-none"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-slate-600">
                  Telefone
                </span>
                <input
                  required
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="Numero para retorno"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-300 focus:outline-none"
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="mb-2 block text-sm text-slate-600">
                O que voce quer estruturar?
              </span>
              <textarea
                required
                name="objetivo"
                value={formData.objetivo}
                onChange={handleChange}
                rows={6}
                placeholder="Conte o que voce precisa: site, catalogo, CRM, organizacao comercial ou algo mais especifico."
                className="w-full rounded-[1.6rem] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-300 focus:outline-none"
              />
            </label>

            <div className="mt-6 flex flex-col gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-sm leading-6 text-slate-500">
                O envio abre o WhatsApp com uma mensagem pronta usando os dados
                que voce preencheu acima.
              </p>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
              >
                Enviar interesse
                <ArrowRight className="size-4" />
              </button>
            </div>

            {submitted ? (
              <p className="mt-4 text-sm text-emerald-700">
                WhatsApp aberto com a mensagem pronta. Se preferir, voce tambem
                pode ajustar o texto antes de enviar.
              </p>
            ) : null}
          </form>
        </section>
      </div>
    </main>
  )
}

export default App
