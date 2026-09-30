"use client";
import Image from "next/image";
import { useState } from "react";

const whatsappLink =
  "https://wa.me/5544991559197?text=Olá%20Dayane!%20Conheci%20seu%20trabalho%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços.";

const steps = [
  {
    number: "01",
    title: "Entendimento",
    text: "Conheço seu negócio, seus objetivos, público e o momento atual da sua empresa.",
  },
  {
    number: "02",
    title: "Estratégia",
    text: "Definimos as prioridades e as ações mais adequadas para o seu objetivo.",
  },
  {
    number: "03",
    title: "Execução",
    text: "Colocamos as estratégias em prática com organização, criatividade e acompanhamento.",
  },
  {
    number: "04",
    title: "Acompanhamento",
    text: "Analisamos o desempenho das ações e buscamos oportunidades de melhoria.",
  },
];

const projects = [
  {
    title: "Gestão de Mídias Sociais",
    category: "Conteúdo & posicionamento",
    description:
      "Planejamento visual e estratégico para fortalecer a presença digital de marcas e negócios.",
  },
  {
    title: "Campanhas de Tráfego Pago",
    category: "Estratégia & anúncios",
    description:
      "Estruturação de campanhas com foco em alcançar públicos relevantes para cada negócio.",
  },
  {
    title: "Presença Digital",
    category: "Estratégia integrada",
    description:
      "A combinação de conteúdo, comunicação e mídia para construir uma presença digital mais consistente.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#fafbff] text-slate-950">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-[#fafbff]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <a href="#inicio" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-sm font-bold text-white shadow-lg shadow-blue-500/20">
              DH
            </div>

            <div>
              <p className="text-sm font-bold tracking-tight">DAYANE HOMAN</p>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                Estratégia Digital
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#sobre"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              Sobre
            </a>
            <a
              href="#servicos"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              Serviços
            </a>
            <a
              href="#processo"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              Como funciona
            </a>
            <a
              href="#projetos"
              className="hidden text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              Projetos
            </a>
          </nav>

          <div className="hidden md:block">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Falar comigo
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-slate-200 p-2 md:hidden"
            aria-label="Abrir menu"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-6 py-5 md:hidden">
            <nav className="flex flex-col gap-4">
              <a
                href="#sobre"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-slate-700"
              >
                Sobre
              </a>
              <a
                href="#servicos"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-slate-700"
              >
                Serviços
              </a>
              <a
                href="#processo"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-slate-700"
              >
                Como funciona
              </a>
              <a
                href="#projetos"
                onClick={() => setMenuOpen(false)}
                className="hidden text-sm font-medium text-slate-700"
              >
                Projetos
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
                className="rounded-full bg-slate-950 px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Falar comigo
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-violet-300/20 blur-3xl" />

        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              Gestão de Tráfego Pago & Mídias Sociais
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.02] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
              Estratégia digital para o seu negócio{" "}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                crescer.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Gestão de tráfego pago e mídias sociais para ajudar sua empresa a
              alcançar as pessoas certas, fortalecer sua presença online e criar
              novas oportunidades.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Quero falar sobre meu negócio
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4"
                >
                  <path d="M5 12h14" strokeLinecap="round" />
                  <path
                    d="m13 6 6 6-6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-semibold text-slate-800 transition hover:border-blue-300 hover:text-blue-700"
              >
                Conhecer os serviços
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                Estratégia personalizada
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-600" />
                Acompanhamento
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                Comunicação profissional
              </span>
            </div>
          </div>

          {/* VISUAL HERO */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-transparent blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white p-4 shadow-[0_30px_90px_rgba(15,23,42,0.12)] sm:p-5">
              <Image
                src="/imagens/hero-meta-ads.png"
                alt="Meta Ads, Instagram e Facebook — estratégia de tráfego pago"
                width={1225}
                height={1225}
                priority
                className="h-auto w-full rounded-[1.5rem] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section
        id="sobre"
        className="border-y border-slate-200/70 bg-white py-24"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div className="relative mx-auto w-full max-w-md lg:mx-0">
            <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-blue-200/50 via-violet-200/40 to-transparent blur-2xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-[#fafbff] shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
              <Image
                src="/imagens/dayane-homan.png"
                alt="Dayane Homan"
                width={896}
                height={1152}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Sobre meu trabalho
            </span>

            <h2 className="mt-4 max-w-lg text-4xl font-bold tracking-[-0.03em] text-slate-950 sm:text-5xl">
              Estratégia, criatividade e tecnologia.
            </h2>

            <p className="mt-8 text-xl leading-9 text-slate-600">
              Sou{" "}
              <strong className="font-semibold text-slate-950">
                Dayane Homan
              </strong>
              , profissional de Marketing e Desenvolvimento de Sistemas, atuando
              com gestão de tráfego pago, mídias sociais e soluções digitais.
            </p>

            <p className="mt-6 text-xl leading-9 text-slate-500">
              Meu trabalho une estratégia, criatividade e tecnologia para
              desenvolver ações alinhadas aos objetivos de cada negócio.
              Acredito que uma presença digital profissional precisa fazer
              sentido para a marca e, principalmente, para as pessoas que ela
              deseja alcançar.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-[#fafbff] p-5">
                <p className="text-2xl font-bold text-slate-950">+100</p>
                <p className="mt-1 text-sm leading-5 text-slate-500">
                  clientes atendidos em diferentes projetos digitais
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-[#fafbff] p-5">
                <p className="text-2xl font-bold text-slate-950">Marketing</p>
                <p className="mt-1 text-sm leading-5 text-slate-500">
                  formação e experiência na área
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-[#fafbff] p-5">
                <p className="text-2xl font-bold text-slate-950">Tecnologia</p>
                <p className="mt-1 text-sm leading-5 text-slate-500">
                  formação em programação de sistemas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="bg-[#f8faff] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Meus serviços
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] text-slate-950 sm:text-5xl">
              Soluções completas para sua presença digital.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Serviços pensados para diferentes necessidades do negócio, desde a
              construção de presença até a divulgação estratégica.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {/* TRÁFEGO PAGO */}
            <article className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(15,23,42,0.11)]">
              <div className="p-7 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-8 w-8"
                    >
                      <path d="M4 19V5" />
                      <path d="M4 19h16" />
                      <path d="m7 15 4-4 3 2 5-6" />
                      <path d="M16 7h3v3" />
                    </svg>
                  </div>

                  <span className="text-sm font-semibold text-slate-300">
                    01
                  </span>
                </div>

                <div className="mt-8 grid items-center gap-8 xl:grid-cols-[1.1fr_0.9fr]">
                  <div>
                    <h3 className="text-3xl font-bold tracking-[-0.03em] text-slate-950">
                      Gestão de Tráfego Pago
                    </h3>

                    <p className="mt-4 text-base leading-7 text-slate-600">
                      Estratégia e gestão de campanhas para colocar sua empresa
                      diante de pessoas com potencial interesse no seu produto
                      ou serviço, buscando gerar mais visibilidade,
                      oportunidades e vendas.
                    </p>
                  </div>

                  <div className="relative mx-auto flex h-52 w-full max-w-[250px] items-center justify-center">
                    <div className="absolute inset-4 rounded-[2rem] bg-gradient-to-br from-blue-100 via-violet-100 to-transparent blur-xl" />

                    <div className="relative w-full">
                      <div className="mx-auto flex w-fit items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-lg">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-5 w-5"
                          >
                            <path d="M4 12h16" />
                            <path d="M12 4v16" />
                          </svg>
                        </span>
                        <span className="font-bold text-slate-950">
                          Meta Ads
                        </span>
                      </div>

                      <div className="mt-3 flex items-center justify-center gap-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500 via-pink-500 to-orange-400 text-white shadow-lg">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            className="h-7 w-7"
                          >
                            <rect x="4" y="4" width="16" height="16" rx="5" />
                            <circle cx="12" cy="12" r="4" />
                            <circle
                              cx="17.2"
                              cy="6.8"
                              r="1"
                              fill="currentColor"
                              stroke="none"
                            />
                          </svg>
                        </div>

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1877F2] text-white shadow-lg">
                          <span className="text-3xl font-bold">f</span>
                        </div>
                      </div>

                      <div className="mx-auto mt-4 w-[190px] rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
                        <div className="flex items-end gap-2">
                          <span className="h-5 w-4 rounded-t bg-blue-200" />
                          <span className="h-8 w-4 rounded-t bg-blue-300" />
                          <span className="h-12 w-4 rounded-t bg-blue-400" />
                          <span className="h-16 w-4 rounded-t bg-violet-400" />
                          <span className="h-20 w-4 rounded-t bg-violet-500" />
                        </div>
                        <p className="mt-2 text-xs font-semibold text-slate-500">
                          acompanhamento de resultados
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl bg-[#f7f9ff] p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                    O que está incluído
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      "Planejamento de campanhas",
                      "Estruturação de anúncios",
                      "Definição de públicos",
                      "Criação de criativos (anúncios)",
                      "Monitoramento e otimização",
                      "Relatórios de desempenho",
                      "Acompanhamento contínuo",
                      "Suporte durante as campanhas",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                          ✓
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex gap-4 rounded-2xl bg-gradient-to-r from-blue-50 to-violet-50 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-6 w-6"
                    >
                      <circle cx="12" cy="12" r="8" />
                      <path d="m12 8 2.5 2.5L12 13" />
                      <path d="M12 13V8" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                      Resultado
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Mais visibilidade, mais oportunidades e acompanhamento
                      estratégico das campanhas.
                    </p>
                  </div>
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 flex items-center justify-center gap-3 rounded-2xl bg-blue-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-blue-700"
                >
                  Quero saber mais sobre Tráfego Pago
                  <span aria-hidden>→</span>
                </a>
              </div>
            </article>

            {/* MÍDIAS SOCIAIS */}
            <article className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(15,23,42,0.11)]">
              <div className="p-7 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-8 w-8"
                    >
                      <rect x="4" y="4" width="16" height="16" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle
                        cx="17.2"
                        cy="6.8"
                        r="1"
                        fill="currentColor"
                        stroke="none"
                      />
                    </svg>
                  </div>

                  <span className="text-sm font-semibold text-slate-300">
                    02
                  </span>
                </div>

                <div className="mt-8 grid items-center gap-8 xl:grid-cols-[1.1fr_0.9fr]">
                  <div>
                    <h3 className="text-3xl font-bold tracking-[-0.03em] text-slate-950">
                      Gestão de Mídias Sociais
                    </h3>

                    <p className="mt-4 text-base leading-7 text-slate-600">
                      Planejamento e criação de conteúdo para construir uma
                      presença digital profissional, consistente e alinhada à
                      sua marca, fortalecendo o relacionamento com seu público.
                    </p>
                  </div>

                  <div className="relative mx-auto flex h-52 w-full max-w-[250px] items-center justify-center">
                    <div className="absolute inset-4 rounded-[2rem] bg-gradient-to-br from-violet-100 via-blue-100 to-transparent blur-xl" />

                    <div className="relative w-[175px] -rotate-3 rounded-[1.5rem] border-8 border-slate-900 bg-white p-3 shadow-2xl">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] font-bold text-slate-950">
                          Sua marca
                        </span>
                        <span className="h-2 w-2 rounded-full bg-violet-500" />
                      </div>

                      <div className="relative mt-3 aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-blue-100 via-violet-100 to-pink-100">
                        <Image
                          src="/imagens/dayane-homan.png"
                          alt="Conteúdo para redes sociais"
                          fill
                          sizes="160px"
                          className="object-cover object-center"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/45 to-transparent p-3 pt-8">
                          <span className="text-[7px] font-semibold text-white">
                            Presença digital
                          </span>
                        </div>
                      </div>

                      <div className="mt-3 flex gap-2 text-[8px] text-slate-400">
                        <span>♡</span>
                        <span>○</span>
                        <span>⌁</span>
                      </div>

                      <div className="mt-2 h-1.5 w-20 rounded-full bg-slate-200" />
                      <div className="mt-1 h-1.5 w-28 rounded-full bg-slate-100" />
                    </div>

                    <div className="absolute right-0 top-8 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-lg">
                      <p className="text-[10px] font-semibold text-slate-500">
                        Conteúdo estratégico
                      </p>
                    </div>

                    <div className="absolute bottom-5 left-0 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-lg">
                      <p className="text-[10px] font-semibold text-slate-500">
                        Mais engajamento
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl bg-[#f7f9ff] p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600">
                    O que está incluído
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      "Planejamento de conteúdo",
                      "Calendário editorial",
                      "Criação de posts e stories",
                      "Design dos materiais",
                      "Legendas e comunicação",
                      "Gestão de interações",
                      "Análise de resultados",
                      "Ajustes estratégicos",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-600">
                          ✓
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex gap-4 rounded-2xl bg-gradient-to-r from-violet-50 to-blue-50 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-violet-600 shadow-sm">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-6 w-6"
                    >
                      <path d="M5 18V9" />
                      <path d="M10 18V5" />
                      <path d="M15 18v-7" />
                      <path d="M20 18V7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600">
                      Resultado
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Uma marca mais forte, mais presença e uma comunicação
                      alinhada aos objetivos do seu negócio.
                    </p>
                  </div>
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 flex items-center justify-center gap-3 rounded-2xl bg-violet-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-violet-700"
                >
                  Quero saber mais sobre Mídias Sociais
                  <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">
                Como funciona
              </span>

              <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] text-slate-950 sm:text-5xl">
                Um processo claro do início ao acompanhamento.
              </h2>

              <p className="mt-5 max-w-md leading-8 text-slate-600">
                Antes de executar, entendemos o cenário. A estratégia é
                construída de acordo com o objetivo e as necessidades do seu
                negócio.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-3xl border border-slate-200 bg-[#fafbff] p-7"
                >
                  <span className="text-sm font-bold text-blue-600">
                    {step.number}
                  </span>

                  <h3 className="mt-6 text-xl font-bold text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MARCAS */}
      <section className="relative overflow-hidden border-y border-slate-200/70 bg-[#f8faff] py-24">
        <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-100/70 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-[-12rem] h-96 w-96 rounded-full bg-violet-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-5">
              <span className="h-px w-14 bg-blue-300" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                Marcas
              </span>
              <span className="h-px w-14 bg-blue-300" />
            </div>

            <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
              Marcas que já confiaram
              <br className="hidden sm:block" /> no meu trabalho
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
              Ao longo da minha trajetória, tive a oportunidade de contribuir
              com diferentes negócios e profissionais em seus projetos digitais.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                file: "manaca-da-serra.png",
                name: "Manacá da Serra",
                bg: "#243327",
              },
              {
                file: "agropecuaria-uniao.png",
                name: "Agropecuária União",
                bg: "#f1f3f4",
              },
              { file: "isabela-dib.png", name: "Isabela Dib", bg: "#f1f3f4" },
              {
                file: "ke-studio-kauany-eduarda.png",
                name: "Ke Studio",
                bg: "#000000",
              },
              {
                file: "r-group-cenografia.png",
                name: "R Group Cenografia",
                bg: "#000000",
              },
              {
                file: "sonhos-travel.png",
                name: "Sonhos Travel",
                bg: "#031f2d",
              },
              { file: "smart-cell.png", name: "Smart Cell", bg: "#000000" },
              { file: "vita-rescue.png", name: "Vita Rescue", bg: "#f1f3f4" },
            ].map((logo) => (
              <div
                key={logo.file}
                className="group flex min-h-[210px] items-center justify-center rounded-[1.75rem] border border-white/70 px-6 py-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]"
                style={{ backgroundColor: logo.bg }}
              >
                <Image
                  src={`/logos/${logo.file}`}
                  alt={logo.name}
                  width={320}
                  height={180}
                  className="h-auto max-h-40 w-auto max-w-[290px] object-contain transition duration-300 group-hover:scale-[1.03]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                Meu trabalho
              </span>

              <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
                Mais do que publicar ou anunciar.
              </h2>

              <p className="mt-5 max-w-lg leading-8 text-slate-400">
                A proposta é entender o negócio e transformar objetivos em ações
                digitais organizadas, coerentes e acompanhadas.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Estratégia personalizada",
                  text: "Cada negócio possui um momento, público e objetivo diferente.",
                },
                {
                  title: "Comunicação profissional",
                  text: "Conteúdo pensado para representar a marca de forma clara e consistente.",
                },
                {
                  title: "Acompanhamento",
                  text: "As ações são acompanhadas para identificar oportunidades de melhoria.",
                },
                {
                  title: "Transparência",
                  text: "Você entende o que está sendo feito e qual é o propósito de cada ação.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-blue-400/30 hover:bg-white/[0.06]"
                >
                  <span className="text-sm font-bold text-blue-400">
                    0{index + 1}
                  </span>

                  <h3 className="mt-6 text-lg font-bold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJETOS — mantido no código, mas oculto por enquanto */}
      <section id="projetos" className="hidden bg-[#fafbff] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                Projetos selecionados
              </span>

              <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] text-slate-950 sm:text-5xl">
                Alguns dos trabalhos que desenvolvo.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Esta apresentação pode ser atualizada com novos projetos,
                criativos e cases conforme o portfólio evolui.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5"
              >
                <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 via-blue-50 to-violet-100 p-8">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.18),transparent_35%)]" />

                  <div className="relative w-full max-w-xs rounded-2xl border border-white/80 bg-white/80 p-5 shadow-xl backdrop-blur">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                      <span className="h-2.5 w-2.5 rounded-full bg-violet-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                    </div>

                    <div className="mt-5 space-y-3">
                      <div className="h-3 w-2/5 rounded-full bg-slate-200" />
                      <div className="h-8 w-4/5 rounded-lg bg-gradient-to-r from-blue-100 to-violet-100" />
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-16 rounded-lg bg-blue-50" />
                        <div className="h-16 rounded-lg bg-violet-50" />
                        <div className="h-16 rounded-lg bg-slate-100" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-xl font-bold text-slate-950">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {project.description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950">
                    Projeto selecionado
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-4 w-4 transition group-hover:translate-x-1"
                    >
                      <path d="M5 12h14" strokeLinecap="round" />
                      <path
                        d="m13 6 6 6-6 6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
            Vamos conversar?
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-[-0.04em] text-slate-950 sm:text-6xl">
            Seu próximo passo pode começar com uma conversa.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Me conte sobre o seu negócio, seus objetivos e o que você procura. A
            partir disso, podemos entender quais estratégias fazem sentido para
            o seu momento.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-slate-950 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Falar com a Dayane
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-4 w-4"
            >
              <path d="M5 12h14" strokeLinecap="round" />
              <path
                d="m13 6 6 6-6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-[#fafbff]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <p className="font-bold text-slate-950">Dayane Homan</p>
            <p className="mt-1 text-sm text-slate-500">
              Gestão de Tráfego Pago · Gestão de Mídias Sociais
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm">
            <a
              href="https://www.instagram.com/day.homan"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-slate-500 transition hover:text-blue-600"
            >
              Instagram
            </a>

            <a
              href="https://www.linkedin.com/in/dayane-homan"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-slate-500 transition hover:text-blue-600"
            >
              LinkedIn
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-slate-500 transition hover:text-blue-600"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-slate-200/70 py-5 text-center">
          <p className="text-xs text-slate-400">
            © 2026 Dayane Homan — Gestão de Tráfego Pago e Mídias Sociais.
          </p>
        </div>
      </footer>
    </main>
  );
}
