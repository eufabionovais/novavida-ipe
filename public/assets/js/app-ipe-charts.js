/* GRÁFICO SITUAÇÃO DOCUMENTOS PF */
let optionSituacaoDocumentos = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "line",
    },
  },
  legend: {
    orient: "horizontal",
    left: "center",
    right: "auto",
    top: 190,
  },

  grid: {
    top: "5%",
    left: "5%",
    right: "5%",
    bottom: "25%",
    containLabel: true,
  },

  xAxis: {
    type: "value",
    show: false,
  },
  yAxis: {
    type: "category",
    data: ["Status"],
  },
  series: [
    {
      name: "Ativo",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [9793],
    },
    {
      name: "Cancelado",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [2210],
    },
    {
      name: "Suspenso",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [1535],
    },
    {
      name: "Outros",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [910],
    },
  ],
};

const elGraficoSituacaoDocumentoPF = document.querySelector(
  "#graficoSituacaoDocumentoPF",
);
let graficoSituacaoDocumentoPF = echarts.init(
  elGraficoSituacaoDocumentoPF,
  null,
  {
    height: 250,
  },
);
graficoSituacaoDocumentoPF.setOption(optionSituacaoDocumentos);
/* FIM GRÁFICO SITUAÇÃO DOCUMENTOS PF */

/* GRAU VÍNCULO PF */
let optionVinculoFamiliarPF = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    top: "5%",
    left: "center",
    selectedMode: false,
  },

  grid: {
    top: "5%",
    left: "5%",
    right: "5%",
    bottom: "5%",
    containLabel: true,
  },
  series: [
    {
      name: "",
      type: "pie",
      radius: ["30%", "100%"],
      center: ["50%", "70%"],
      // adjust the start angle
      startAngle: 180,
      label: {
        show: false, // Define show como false para remover os rótulos de dados
        formatter(param) {
          // correct the percentage
          return param.name + " (" + param.percent * 2 + "%)";
        },
      },
      data: [
        { value: 1048, name: "Mãe" },
        { value: 735, name: "Pai" },
        { value: 580, name: "Filho" },
        {
          // make a record to fill the bottom 50%
          value: 1048 + 735 + 580,
          itemStyle: {
            // stop the chart from rendering this piece
            color: "none",
            decal: {
              symbol: "none",
            },
          },
          label: {
            show: false,
          },
        },
      ],
    },
  ],
};

const elGrauVinculo = document.querySelector("#graficoGrauVinculoPF");
let graficoGrauVinculoPF = echarts.init(elGrauVinculo, null, {
  height: 250,
});
graficoGrauVinculoPF.setOption(optionVinculoFamiliarPF);
/* FIM GRAU VÍNCULO PF */

/* FLAGS ESTRATÉGICAS DE TELEFONIA */
const optionFlagsTelefonia = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    top: "5%",
    left: "5%",
    right: "5%",
    bottom: "5%",
    containLabel: true,
  },
  xAxis: {
    type: "value",
    boundaryGap: [0, 0.01],
    axisLabel: {
      show: false,
    },
    splitLine: {
      show: false, // Define show como false para remover as linhas de grade
    },
  },
  yAxis: {
    type: "category",
    data: ["Badphone", "Assinante", "Hot", "WhatsApp", "Proccon"],
  },
  series: [
    {
      name: "",
      type: "bar",
      data: [350456, 123489, 229034, 104970, 131744, 630230],
      barWidth: 25,
      barHeight: 80,
    },
  ],
};

const elFlagsTelefoniaPF = document.querySelector("#graficoFlagsTelefoniaPJ");
let graficoFlagsTelefoniaPF = echarts.init(elFlagsTelefoniaPF, null, {
  height: 250,
});
graficoFlagsTelefoniaPF.setOption(optionFlagsTelefonia);
/* FIM FLAGS ESTRATÉGICAS DE TELEFONIA */

/* TELEFONES RANKING */
const optionTelefonesRanking = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "horizontal", // Altere a orientação para horizontal
    top: "top", // Posicione a legenda na parte superior
  },

  grid: {
    top: "5%",
    left: "5%",
    right: "5%",
    bottom: "5%",
    containLabel: true,
  },

  series: [
    {
      name: "",
      type: "pie",
      radius: "70%",
      data: [
        { value: 1048, name: "Ranking 1" },
        { value: 735, name: "Ranking 2" },
        { value: 580, name: "Ranking 3" },
        { value: 484, name: "Ranking 4" },
      ],
      label: {
        show: false, // Define show como false para remover o rótulo de dados
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};

let graficoTelefonesRanking = echarts.init(
  document.querySelector("#graficoTelefonesRanking"),
  null,
  {
    height: 250,
  },
);
graficoTelefonesRanking.setOption(optionTelefonesRanking);
/* FIM TELEFONES RANKING */

/* PESSOAS POR ESTADO */
const optionPessoaPorEstado = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    top: "5%",
    left: "5%",
    right: "5%",
    bottom: "5%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      data: [
        "AC",
        "AL",
        "AP",
        "AM",
        "BA",
        "CE",
        "DF",
        "ES",
        "GO",
        "MA",
        "MT",
        "MS",
        "MG",
        "PA",
        "PB",
        "PR",
        "PE",
        "PI",
        "RJ",
        "RN",
        "RS",
        "RO",
        "RR",
        "SC",
        "SP",
        "SE",
        "TO",
      ],
      axisTick: {
        alignWithLabel: true,
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      axisLabel: {
        show: false, // Define esta opção como false para ocultar as informações do eixo Y
      },
      splitLine: {
        show: false, // Define esta opção como false para remover as linhas horizontais
      },
    },
  ],
  series: [
    {
      type: "bar",
      barWidth: "80%",
      data: [
        601100, 2208680, 2799002, 574804, 10923616, 6352015, 2935056, 3529246,
        5592545, 4305869, 18755761, 2354464, 2740032, 5485138, 2821651, 7341548,
        2367264, 10225639, 17916646, 2591392, 1289816, 383877, 11109552,
        6024825, 1748875, 49655854, 1077129,
      ],
    },
  ],
};

let graficoPessoasPorEstado = echarts.init(
  document.querySelector("#graficoPessoasPorEstado"),
  null,
  {
    height: 250,
  },
);
graficoPessoasPorEstado.setOption(optionPessoaPorEstado);
/* FIM PESSOAS POR ESTADO */

/* PESSOAS POR REGIÃO */

const optionPessoasPorRegiao = {
  radar: {
    // shape: 'circle',
    indicator: [
      { name: "Norte", max: 6500 },
      { name: "Nordeste", max: 16000 },
      { name: "Centro-Oeste", max: 30000 },
      { name: "Oeste", max: 38000 },
      { name: "Sudeste", max: 52000 },
    ],

    splitArea: {
      areaStyle: {
        color: ["#efefef", "#f4f4f4"],
      },
    },
    splitLine: {
      lineStyle: {
        color: "rgba(198, 198, 198, 0.4)", // Color of the grid lines
      },
    },
  },
  series: [
    {
      type: "radar",

      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
        },
      ],
    },
  ],
};

let graficoPessoasPorRegiao = echarts.init(
  document.querySelector("#graficoPessoasPorRegiao"),
  null,
  {
    height: 250,
  },
);
graficoPessoasPorRegiao.setOption(optionPessoasPorRegiao);
/* FIM PESSOAS POR REGIÃO */

/* PESSOAS POR SEXO */
const optionPessoasPorSexo = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    top: "5%",
    left: "center",
    // doesn't perfectly work with our tricks, disable it
    selectedMode: false,
  },
  grid: {
    top: "5%",
    left: "5%",
    right: "5%",
    bottom: "5%",
    containLabel: true,
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["30%", "100%"],
      center: ["50%", "70%"],
      // adjust the start angle
      startAngle: 180,
      label: {
        show: false, // Define show como false para remover os rótulos de dados
        formatter(param) {
          // correct the percentage
          return param.name + " (" + param.percent * 2 + "%)";
        },
      },
      data: [
        { value: 15, name: "Homem" },
        { value: 55, name: "Mulher" },
        { value: 30, name: "Infefinido" },
        {
          // make a record to fill the bottom 50%
          value: 15 + 55 + 30,
          itemStyle: {
            // stop the chart from rendering this piece
            color: "none",
            decal: {
              symbol: "none",
            },
          },
          label: {
            show: false,
          },
        },
      ],
    },
  ],
};
let graficoPessoasPorSexo = echarts.init(
  document.querySelector("#graficoPessoasPorSexo"),
  null,
  {
    height: 250,
  },
);
graficoPessoasPorSexo.setOption(optionPessoasPorSexo);
/* FIM PESSOAS POR SEXO */

/* PESSOAS POR GERAÇÃO */
const optionPessoasPorGeracao = {
  legend: {
    top: "top",
  },

  series: [
    {
      name: "Persona de geração",
      type: "pie",
      radius: [50, 90],
      center: ["50%", "50%"],
      roseType: "area",
      itemStyle: {
        borderRadius: 8,
      },
      label: {
        show: true, // Ativar a exibição dos rótulos
        formatter: "{b}: {d}%", // Formato dos rótulos (nome da categoria e porcentagem)
      },
      data: [
        { value: 40, name: "Veteranos" },
        { value: 38, name: "Baby Boomer" },
        { value: 32, name: "Gen X" },
        { value: 30, name: "Gen Y" },
        { value: 28, name: "Gen Z" },
      ],
    },
  ],
};

let graficoPessoasPorGeracao = echarts.init(
  document.querySelector("#graficoPessoasPorGeracao"),
  null,
  {
    height: 250,
  },
);
graficoPessoasPorGeracao.setOption(optionPessoasPorGeracao);
/* FIM PESSOAS POR GERAÇÃO */

/* PERSONA DIGITAL */

const optionPersonaDigital = {
  tooltip: {
    trigger: "item",
    // formatter: "{a} <br/>{b} : {c}%",
    formatter: "{b} : {c}%",
  },

  // grid: {
  //   top: "1%",
  //   left: "1%",
  //   right: "1%",
  //   bottom: "1%",
  //   containLabel: true,
  // },
  series: [
    {
      name: "",
      type: "funnel",
      left: "center",
      top: 10,
      bottom: 10,
      width: "80%",
      min: 0,
      max: 100,
      minSize: "0%",
      maxSize: "100%",
      sort: "descending",
      gap: 2,
      label: {
        show: true,
        position: "inside",
      },
      labelLine: {
        length: 10,
        lineStyle: {
          width: 1,
          type: "solid",
        },
      },
      itemStyle: {
        borderColor: "#fff",
        borderWidth: 1,
      },
      emphasis: {
        label: {
          fontSize: 20,
        },
      },
      data: [
        { value: 60, name: "Digital--" },
        { value: 40, name: "Digital-" },
        { value: 20, name: "Digital+-" },
        { value: 80, name: "Digital+" },
        { value: 100, name: "Digital++" },
      ],
    },
  ],
};

let graficoPersonaDigital = echarts.init(
  document.querySelector("#graficoPersonaDigital"),
  null,
  {
    height: 250,
  },
);
graficoPersonaDigital.setOption(optionPersonaDigital);
/* FIM PERSONA DIGITAL */

/* PERSONA DE CRÉDITO */
const optionPersonaCredito = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "line",
    },
  },
  legend: {
    orient: "horizontal",
    left: "center",
    top: 190,
    itemGap: 10,

    align: "left",
  },
  grid: {
    top: "2%",
    left: "2%",
    right: "2%",
    bottom: "25%",
    containLabel: true,
  },
  xAxis: {
    type: "value",
    show: false,
  },
  yAxis: {
    type: "category",
    data: ["Quantidade"],
  },
  series: [
    {
      name: "O Bem Amado",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [9793],
    },
    {
      name: "Sempre Presente",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [2210],
    },
    {
      name: "Pago Quanto Puder",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [1535],
    },
    {
      name: "Fujam de Mim",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [910],
    },
    {
      name: "Quem sou Eu",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [1910],
    },
    {
      name: "Novos Entrantes",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [910],
    },
  ],
};

let graficoPersonaCredito = echarts.init(
  document.querySelector("#graficoPersonaCredito"),
  null,
  {
    height: 250,
  },
);
graficoPersonaCredito.setOption(optionPersonaCredito);
/* FIM PERSONA DE CRÉDITO */

/* POSSÍVEL ESCOLARIDADE */

const optionPossivelEscolaridade = {
  title: [
    {
      text: "",
    },
  ],

  grid: {
    top: "2%",
    left: "2%",
    right: "2%",
    bottom: "2%",
    containLabel: true,
  },
  polar: {
    radius: [30, "120%"], // Reduzi o raio para dar espaço para os rótulos
    axisLine: {}, // Define as configurações da linha do eixo como vazias para remover as linhas
    splitLine: {}, // Define as configurações das linhas de divisão como vazias para remover as linhas
  },
  angleAxis: {
    min: 5,
    max: 15500,
    startAngle: 180,
    show: false, // Define o eixo angular como oculto para remover as legendas
  },
  radiusAxis: {
    type: "category",
    data: [
      "Fundamental",
      "Médio",
      "Técnico",
      "Superior",
      "Pós Graduação",
      "Mestrado",
    ],
    axisLabel: {
      show: true,
      rotate: 270, // Define o ângulo de rotação para 270 graus
      textStyle: {
        fontSize: 10, // Tamanho da fonte
      },
    },
  },
  tooltip: {},
  series: {
    type: "bar",
    data: [
      { value: 1226, name: "Fundamental" },
      { value: 5903, name: "Médio 2" },
      { value: 11732, name: "Técnico 3" },
      { value: 4157, name: "Superior" },
      { value: 10, name: "Pós Graduação" },
      { value: 5, name: "Mestrado" },
    ],
    coordinateSystem: "polar",
    label: {
      show: false,
      position: "top",
      formatter: "{b}: {c}",
    },
    // Defina uma paleta de cores para as colunas
    itemStyle: {
      color: function (params) {
        var colorList = [
          "#37A2DA",
          "#67E0E3",
          "#9FE6B8",
          "#FFDB5C",
          "#FF9F7F",
          "#FB7293",
        ];
        return colorList[params.dataIndex];
      },
    },
  },
};

let graficoPossivelEscolaridade = echarts.init(
  document.querySelector("#graficoPossivelEscolaridade"),
  null,
  {
    height: 250,
  },
);
graficoPossivelEscolaridade.setOption(optionPossivelEscolaridade);
/* FIM POSSÍVEL ESCOLARIDADE */

/* PERSONA DEMOGRÁFICA */

const optionPersonaDemografica = {
  grid: {
    top: "5%",
    left: "5%",
    right: "5%",
    bottom: "5%",
    containLabel: true,
    width: "80%",
  },
  series: [
    {
      type: "treemap",
      data: [
        {
          name: "ADULTO VIDA MODESTA",
          value: 36177318,
        },
        {
          name: "QUERO DESCANSAR",
          value: 25479843,
        },
        {
          name: "JOVEM NEM NEM",
          value: 23428368,
        },
        {
          name: "HOMEM PROVEDOR",
          value: 15987154,
        },
        {
          name: "MULHER COM FOCO NO EMPREGO",
          value: 14006947,
        },
        {
          name: "JOVEM INICIO DE TRABALHO",
          value: 13443300,
        },
        {
          name: "JOVEM APRENDIZ",
          value: 12124606,
        },
        {
          name: "VETERANO SOBREVIVENTE",
          value: 9892046,
        },
        {
          name: "VETERANA SOLITARIA",
          value: 9774377,
        },
        {
          name: "ADULTO SEM ESTUDO",
          value: 5915676,
        },
        {
          name: "VETERANO APOSENTADO",
          value: 4576035,
        },
        {
          name: "JOVEM BEM ENCAMINHADO",
          value: 4213474,
        },
        {
          name: "VIDA SOFRIDA",
          value: 4002105,
        },
        {
          name: "JOVEM-CARREIRA-DEFINIDA",
          value: 3513170,
        },
        {
          name: "DEPENDENTE SOCIAL",
          value: 3438332,
        },
        {
          name: "HOMEM COM FOCO NO TRABALHO",
          value: 3369746,
        },
        {
          name: "VIDA DE APOSENTADO",
          value: 3265633,
        },
        {
          name: "HOMEM COM FOCO NA ESTABILIDADE",
          value: 3263025,
        },
        {
          name: "JOVEM CARREIRA DEFINIDA",
          value: 3071811,
        },
        {
          name: "QUERO APROVEITAR A VIDA",
          value: 2973879,
        },
        {
          name: "SENHORA DEPENDENTE",
          value: 2839292,
        },
        {
          name: "MULHER COM FOCO NA FAMÍLIA",
          value: 2825548,
        },
        {
          name: "QUERO SOSSEGO",
          value: 2535965,
        },
        {
          name: "MULHER COM FOCO NA CARREIRA",
          value: 2469131,
        },
        {
          name: "VITORIOSA",
          value: 2238869,
        },
        {
          name: "VOVOZINHO",
          value: 1976772,
        },
        {
          name: "VOVOZINHA",
          value: 1452660,
        },
        {
          name: "APOSENTADO POR IDADE",
          value: 1151298,
        },
        {
          name: "VETERANO APROVEITANDO A VIDA",
          value: 1031646,
        },
        {
          name: "SERVIÇOS GERAIS",
          value: 703363,
        },
        {
          name: "VETERANA APROVEITANDO A VIDA",
          value: 666014,
        },
        {
          name: "JOVEM ESPERANÇA",
          value: 652149,
        },
        {
          name: "ADULTO DE SUCESSO",
          value: 589541,
        },
        {
          name: "CONQUISTADOR",
          value: 587078,
        },
        {
          name: "SUBEMPREGADO",
          value: 315693,
        },
        {
          name: "MULHER DE SUCESSO",
          value: 298687,
        },
        {
          name: "DONA DO DESTINO",
          value: 275651,
        },
        {
          name: "JOVEM_BOMBANDO",
          value: 240376,
        },
        {
          name: "ESTUDANTE BOA VIDA",
          value: 210667,
        },
        {
          name: "DONA DE CASA",
          value: 191224,
        },
        {
          name: "JOVEM INFLUENTE",
          value: 139776,
        },
        {
          name: "NEM TRABALHA NEM É APOSENTADO",
          value: 130689,
        },
        {
          name: "VETERANO PODEROSO",
          value: 115002,
        },
        {
          name: "VETERANA CULTA",
          value: 50499,
        },
        {
          name: "YOUTUBER",
          value: 3344,
        },
        {
          name: "BLOGUEIRA",
          value: 2437,
        },
      ],
      label: {
        show: true, // Habilita o rótulo de dados visíveis
        formatter: "{b}: {c}", // Define o formato do rótulo (nome: valor)
      },

      dataZoom: [
        {
          type: "inside",
          xAxisIndex: [0],
          yAxisIndex: [0],
          zoom: false, // Disable zooming
        },
      ],
    },
  ],
};

let graficoPersonaDemografica = echarts.init(
  document.querySelector("#graficoPersonaDemografica"),
  null,
  {
    height: 250,
  },
);
graficoPersonaDemografica.setOption(optionPersonaDemografica);
/* FIM PERSONA DEMOGRÁFICA */

/* PROPENSÃO DE PAGAMENTO */
const colors = ["#5470C6", "#91CC75", "#EE6666"];
const optionPropensaoPagamento = {
  color: colors,
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
    },
  },

  legend: {
    data: ["Propensão de Pagamento"],
  },
  xAxis: [
    {
      type: "category",
      axisTick: {
        alignWithLabel: true,
      },
      // prettier-ignore
      data: ['Muito alta', 'Alta', 'Média', 'Baixa','Muito Baixa', 'Zerada'],
    },
  ],
  yAxis: [
    {
      type: "value",
      position: "right",
      alignTicks: true,
      axisLine: {
        show: false, // Oculta a linha do eixo
      },
      axisLabel: {
        formatter: "{value}",
      },
    },
    {
      type: "value",
      position: "right",
      alignTicks: true,
      offset: 80,
      axisLine: {
        show: false, // Oculta a linha do eixo
      },
      axisLabel: {
        formatter: "{value}",
      },
    },
    {
      type: "value",
      position: "left",
      alignTicks: true,
      axisLine: {
        show: false, // Oculta a linha do eixo
      },
      axisLabel: {
        formatter: "{value}",
      },
    },
  ],
  series: [
    {
      name: "Quantidade",
      type: "bar",
      data: [5535, 4525, 3526, 15426, 1541, 1542],
    },
    {
      name: "Percentual",
      type: "line",
      yAxisIndex: 2,
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2],
    },
  ],
};

let graficoPropensaoPagamento = echarts.init(
  document.querySelector("#graficoPropensaoPagamento"),
  null,
  {
    height: 300,
  },
);
graficoPropensaoPagamento.setOption(optionPropensaoPagamento);
/* FIM PROPENSÃO DE PAGAMENTO */

/* COLLECTION STORE */

const optionCollectionScore = {
  legend: {
    top: "top",
  },
  series: [
    {
      name: "Persona de geração",
      type: "pie",
      radius: [50, 150],
      center: ["50%", "50%"],
      roseType: "area",
      itemStyle: {
        borderRadius: 8,
      },
      label: {
        show: true, // Ativar a exibição dos rótulos
        formatter: "{b}: {d}%", // Formato dos rótulos (nome da categoria e porcentagem)
      },
      data: [
        { value: 40, name: "Risco muito alto" },
        { value: 38, name: "Risco alto" },
        { value: 32, name: "Risco médio" },
        { value: 30, name: "Risco baixo" },
        { value: 28, name: "Risco muito baixo" },
      ],
    },
  ],
};

let graficoCollectionScore = echarts.init(
  document.querySelector("#graficoCollectionScore"),
  null,
  {
    height: 300,
  },
);
graficoCollectionScore.setOption(optionCollectionScore);
/* FIM COLLECTION STORE */

/* VÍNCULO SOCIETÁRIO */
const optionVinculoSocietario = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "horizontal", // Altere a orientação para horizontal
    top: "top", // Posicione a legenda na parte superior
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: "50%",
      data: [
        { value: 1048, name: "Grande" },
        { value: 735, name: "Média" },
        { value: 580, name: "Pequena" },
        { value: 484, name: "Micro" },
        { value: 384, name: "Mei" },
      ],
      label: {
        show: false, // Define show como false para remover o rótulo de dados
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};

let graficoVinculoSocietario = echarts.init(
  document.querySelector("#graficoVinculoSocietario"),
  null,
  {
    height: 300,
  },
);
graficoVinculoSocietario.setOption(optionVinculoSocietario);
/* FIM VÍNCULO SOCIETÁRIO */

/* DISTRIBUIÇÃO DE RENDA */

const optionDistribuicaoRenda = {
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b}: {c} ({d}%)",
  },
  legend: {
    data: ["Classe A", "Classe B", "Classe C", "Classe D", "Classe E"],
  },
  series: [
    {
      name: "Classe",
      type: "pie",
      selectedMode: "single",
      radius: [0, "40%"],
      label: {
        position: "inner",
        fontSize: 11,
        show: false, // Oculta os rótulos de dados
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1548, name: "Classe A" },
        { value: 775, name: "Classe B" },
        { value: 679, name: "Classe C" },
        { value: 679, name: "Classe D" },
        { value: 679, name: "Classe E" },
      ],
    },
    {
      name: "Renda",
      type: "pie",
      radius: ["50%", "70%"],
      labelLine: {
        length: 30,
      },
      label: {
        formatter: "{c}", // Exibir apenas a quantidade
        backgroundColor: "#F6F8FC",
        borderColor: "transparent", // Remove a borda
        borderWidth: 1,
        borderRadius: 4,
        rich: {
          per: {
            color: "#fff",
            backgroundColor: "#4C5058",
            padding: [3, 4],
            borderRadius: 4,
          },
        },
        show: false, // Mostrar os rótulos de dados
      },
      data: [
        { value: 1048, name: "De 1.000 a 2.000" },
        { value: 335, name: "De 2.000 a 3.000" },
        { value: 310, name: "De 3.000 a 5.000" },
        { value: 251, name: "De 5.000 a 7.000" },
        { value: 234, name: "De 7.000 a 10.000" },
        { value: 147, name: "De 10.000 a 15.000" },
        { value: 135, name: "De 15.000 a 20.000" },
        { value: 102, name: "Acima de 20.000" },
      ],
    },
  ],
};

let graficoDistribuicaoRenda = echarts.init(
  document.querySelector("#graficoDistribuicaoRenda"),
  null,
  {
    height: 300,
  },
);
graficoDistribuicaoRenda.setOption(optionDistribuicaoRenda);
/* FIM DISTRIBUIÇÃO DE RENDA */

/* CONSULTADOS EM 6 E 12 MESES */
const optionConsultaUltimoAno = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    left: "55%", // Troquei 'top' por 'left'
    top: "center", // Troquei 'left' por 'top'
    selectedMode: false,
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["40%", "70%"],
      center: ["70%", "50%"], // Troquei as coordenadas do centro
      startAngle: 90, // Girei o gráfico em 90 graus
      label: {
        show: false,
        formatter(param) {
          return param.name + " (" + param.percent * 2 + "%)";
        },
      },
      data: [
        { value: 1048, name: "6 meses" },
        { value: 735, name: "12 Meses" },
        {
          value: 1048 + 735,
          itemStyle: {
            color: "none",
            decal: {
              symbol: "none",
            },
          },
          label: {
            show: false,
          },
        },
      ],
    },
  ],
};

let graficoConsultasUltimoAno = echarts.init(
  document.querySelector("#graficoConsultasUltimoAno"),
  null,
  {
    height: 300,
  },
);
graficoConsultasUltimoAno.setOption(optionConsultaUltimoAno);
/* FIM CONSULTADOS EM 6 E 12 MESES */
