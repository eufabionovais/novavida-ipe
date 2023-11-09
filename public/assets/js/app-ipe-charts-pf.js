const eChartsGlobalConfig = {
  color: [
    "#00D59A",
    "#3A7DE8",
    "#93a1c1",
    "#FFAF26",
    "#FF6565",
    "#6456BB",
    "#68C7AC",
    "#71A5D5",
    "#e2db46",
    "#FFC27D",
    "#FF8E8E",
    "#8E77D4",
    "#9BD9C4",
    "#8CB3E6",
    "#E8E8F4",
    "#FFD885",
    "#FF9999",
    "#A793D0",
    "#ACDFD0",
    "#A4C8EA",
    "#ECECF8",
    "#FFDCB3",
    "#FFB8B8",
    "#AE9EDA",
    "#BBE9DE",
    "#B3D0F0",
    "#F7F7FD",
    "#FFE5BF",
    "#FFC9C9",
    "#C7B2E4",
  ],
};

const labelTextConfigs = {
  color: "#000",
  // textShadowColor: "rgba(0, 0, 0, 0.5)",
  // textShadowBlur: 2,
};

echarts.registerPreprocessor(function (option) {
  option.color = eChartsGlobalConfig.color;
});

const colecaoConfiguracoesGraficosPf = [];

function formatarNumeroMilharesCentenas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function getChartColors(index) {
  const color =
    eChartsGlobalConfig.color[index % eChartsGlobalConfig.color.length];
  return color;
}

/* GRÁFICO SITUAÇÃO CPF */
let optionSituacaoDocumentos = {
  label: {
    show: true,
    rotate: 90,
    formatter: function (params) {
      const percentual = Number(params.value);
      return `${percentual}%`;
    },
    textStyle: labelTextConfigs,
  },

  tooltip: {
    trigger: "item",
    formatter: function (params) {
      const valorTotal =
        optionSituacaoDocumentosClone[params.componentIndex].valorAbsoluto;

      return `<b>Quantidade</b>: ${formatarNumeroMilharesCentenas(
        valorTotal,
      )} `;
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
    data: ["Situação"],
  },

  series: [
    {
      name: "Ativo",
      type: "bar",
      stack: "total",
      data: [9793],
    },
    {
      name: "Cancelado",
      type: "bar",
      stack: "total",
      data: [2210],
    },
    {
      name: "Suspenso",
      type: "bar",
      stack: "total",
      data: [1535],
    },
    {
      name: "Outros",
      type: "bar",
      stack: "total",
      data: [910],
    },
  ],
};

const elGraficoSituacaoDocumentoPF = document.querySelector(
  "#graficoSituacaoDocumentoPF",
);

const somaDataSituacaoDocumento = optionSituacaoDocumentos.series.reduce(
  (acumulador, itemAtual) => {
    return acumulador + itemAtual.data[0];
  },
  0,
);

const optionSituacaoDocumentosClone = optionSituacaoDocumentos.series.map(
  (item) => {
    return {
      ...item,
      valorAbsoluto: item.data[0],
      data: [
        `${((item.data[0] / somaDataSituacaoDocumento) * 100).toFixed(1)}`,
      ],
    };
  },
);

if (elGraficoSituacaoDocumentoPF) {
  let graficoSituacaoDocumentoPF = echarts.init(
    elGraficoSituacaoDocumentoPF,
    null,
    {
      height: 250,
    },
  );
  optionSituacaoDocumentos.series = optionSituacaoDocumentosClone;
  graficoSituacaoDocumentoPF.setOption(optionSituacaoDocumentos);
}
colecaoConfiguracoesGraficosPf.push(optionSituacaoDocumentos);

/* FIM GRÁFICO SITUAÇÃO CPF */

/* GRAU VÍNCULO PF */
let optionVinculoFamiliarPF = {
  tooltip: {
    trigger: "item",
    formatter: function (params) {
      return `<b>Quantidade:</b> ${formatarNumeroMilharesCentenas(
        params.data.value,
      )}`;
    },
  },
  label: {
    show: true,
    position: "inside",
    formatter: function (params) {
      return `${(params.percent * 2).toFixed(1)}%`;
    },
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
      startAngle: 180,

      data: [
        { value: 1048, name: "Mãe" },
        { value: 735, name: "Pai" },
        { value: 580, name: "Filho" },
        {
          // make a record to fill the bottom 50%
          label: {
            show: false,
          },
          value: 1048 + 735 + 580,
          itemStyle: {
            color: "none",
            decal: {
              symbol: "none",
            },
          },
        },
      ],
    },
  ],
};

const elGrauVinculo = document.querySelector("#graficoGrauVinculoPF");
if (elGrauVinculo) {
  let graficoGrauVinculoPF = echarts.init(elGrauVinculo, null, {
    height: 250,
  });
  graficoGrauVinculoPF.setOption(optionVinculoFamiliarPF);
}
colecaoConfiguracoesGraficosPf.push(optionVinculoFamiliarPF);
/* FIM GRAU VÍNCULO PF */

/* FLAGS ESTRATÉGICAS DE TELEFONIA */
let optionFlagsTelefonia = {
  tooltip: {
    trigger: "item",
    formatter: function (params) {
      return `<b>Quantidade:</b> ${formatarNumeroMilharesCentenas(
        params.value,
      )}`;
    },
  },
  label: {
    show: true,
    formatter: function (params) {
      const percent = Number(
        optionFlagsTelefoniaClone[params.dataIndex].value[0],
      ).toFixed(1);
      return `${percent}%`;
    },
    position: ["50%", "40%"],
  },
  grid: {
    top: "5%",
    left: "1%",
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
      show: false,
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
      barWidth: 35,
      barHeight: 80,
      label: {
        textStyle: labelTextConfigs,
      },
      data: [
        {
          value: 350456,
          itemStyle: {
            color: eChartsGlobalConfig.color[0],
          },
        },
        {
          value: 123489,
          itemStyle: {
            color: eChartsGlobalConfig.color[1],
          },
        },
        {
          value: 229034,
          itemStyle: {
            color: eChartsGlobalConfig.color[2],
          },
        },
        {
          value: 104970,
          itemStyle: {
            color: eChartsGlobalConfig.color[3],
          },
        },
        {
          value: 131744,
          itemStyle: {
            color: eChartsGlobalConfig.color[4],
          },
        },
      ],
    },
  ],
};

const elFlagsTelefoniaPF = document.querySelector("#graficoFlagsTelefoniaPF");

const somaDataFlagsTelefonia = optionFlagsTelefonia.series[0].data.reduce(
  (acumulador, itemAtual) => {
    return acumulador + itemAtual.value;
  },
  0,
);

const optionFlagsTelefoniaClone = optionFlagsTelefonia.series[0].data.map(
  (item) => {
    return {
      ...item,
      valorAbsoluto: item.value,
      value: [`${((item.value / somaDataFlagsTelefonia) * 100).toFixed(1)}`],
    };
  },
);

if (elFlagsTelefoniaPF) {
  let graficoFlagsTelefoniaPF = echarts.init(elFlagsTelefoniaPF, null, {
    height: 250,
  });

  graficoFlagsTelefoniaPF.series = optionFlagsTelefoniaClone;
  graficoFlagsTelefoniaPF.setOption(optionFlagsTelefonia);
}
colecaoConfiguracoesGraficosPf.push(optionFlagsTelefonia);
/* FIM FLAGS ESTRATÉGICAS DE TELEFONIA */

/* TELEFONES RANKING */
const optionTelefonesRanking = {
  tooltip: {
    trigger: "item",
    formatter: function (params) {
      return `<b>Quantidade:</b> ${formatarNumeroMilharesCentenas(
        params.value,
      )}`;
    },
  },
  label: {
    show: true,
    position: "inside",
    formatter: function (params) {
      return `${params.percent.toFixed(1)}%`;
    },
  },
  legend: {
    orient: "horizontal",
    top: "top",
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

const elGraficoTelefonesRanking = document.querySelector(
  "#graficoTelefonesRanking",
);
if (elGraficoTelefonesRanking) {
  let graficoTelefonesRanking = echarts.init(elGraficoTelefonesRanking, null, {
    height: 250,
  });
  graficoTelefonesRanking.setOption(optionTelefonesRanking);
}
colecaoConfiguracoesGraficosPf.push(optionTelefonesRanking);
/* FIM TELEFONES RANKING */

/* PESSOAS POR ESTADO */
let optionPessoaPorEstado = {
  tooltip: {
    trigger: "item",
    formatter: function (params) {
      return `<b>Quantidade</b>: ${formatarNumeroMilharesCentenas(
        params.data.valorAbsoluto,
      )} `;
    },
    axisPointer: {
      type: "shadow",
    },
  },

  grid: {
    top: "20%",
    left: "5%",
    right: "5%",
    bottom: "15%",
    containLabel: true,
  },
  dataZoom: [
    {
      type: "slider",
      show: true,
      xAxisIndex: [0],
      start: 10,
      end: 30,
      bottom: 10,
      height: 20,
    },
  ],

  xAxis: [
    {
      axisLabel: {
        show: true,
      },
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
        show: true,
      },
      splitLine: {
        show: true,
      },
    },
  ],
  series: [
    {
      type: "bar",
      barWidth: "70%",
      label: {
        show: true,
        position: "top",
        // rotate: 90,
        textShadowBlur: 0,
        borderWidth: 0,
        textStyle: labelTextConfigs,

        formatter: function (params) {
          return `${params.value}%`;
        },
      },

      data: [
        {
          value: 601100,
          itemStyle: {
            color: "#00D59A",
          },
        },
        {
          value: 2208680,
          itemStyle: {
            color: "#3A7DE8",
          },
        },
        {
          value: 2799002,
          itemStyle: {
            color: "#93a1c1",
          },
        },
        {
          value: 574804,
          itemStyle: {
            color: "#FFAF26",
          },
        },
        {
          value: 10923616,
          itemStyle: {
            color: "#FF6565",
          },
        },
        {
          value: 6352015,
          itemStyle: {
            color: "#6456BB",
          },
        },
        {
          value: 2935056,
          itemStyle: {
            color: "#68C7AC",
          },
        },
        {
          value: 3529246,
          itemStyle: {
            color: "#71A5D5",
          },
        },
        {
          value: 5592545,
          itemStyle: {
            color: "#e2db46",
          },
        },
        {
          value: 4305869,
          itemStyle: {
            color: "#FFC27D",
          },
        },
        {
          value: 18755761,
          itemStyle: {
            color: "#FF8E8E",
          },
        },
        {
          value: 2354464,
          itemStyle: {
            color: "#8E77D4",
          },
        },
        {
          value: 2740032,
          itemStyle: {
            color: "#9BD9C4",
          },
        },
        {
          value: 5485138,
          itemStyle: {
            color: "#8CB3E6",
          },
        },
        {
          value: 2821651,
          itemStyle: {
            color: "#E8E8F4",
          },
        },
        {
          value: 7341548,
          itemStyle: {
            color: "#FFD885",
          },
        },
        {
          value: 2367264,
          itemStyle: {
            color: "#FF9999",
          },
        },
        {
          value: 10225639,
          itemStyle: {
            color: "#A793D0",
          },
        },
        {
          value: 17916646,
          itemStyle: {
            color: "#ACDFD0",
          },
        },
        {
          value: 2591392,
          itemStyle: {
            color: "#A4C8EA",
          },
        },
        {
          value: 1289816,
          itemStyle: {
            color: "#ECECF8",
          },
        },
        {
          value: 383877,
          itemStyle: {
            color: "#FFDCB3",
          },
        },
        {
          value: 11109552,
          itemStyle: {
            color: "#FFB8B8",
          },
        },
        {
          value: 6024825,
          itemStyle: {
            color: "#AE9EDA",
          },
        },
        {
          value: 1748875,
          itemStyle: {
            color: "#BBE9DE",
          },
        },
        {
          value: 49655854,
          itemStyle: {
            color: "#B3D0F0",
          },
        },
        {
          value: 1077129,
          itemStyle: {
            color: "#F7F7FD",
          },
        },
      ],
    },
  ],
};

const somaDataPessoaPorEstado = optionPessoaPorEstado.series[0].data.reduce(
  (acumulador, itemAtual) => {
    return acumulador + itemAtual.value;
  },
  0,
);

const optionsPessoaPorEstadoClone = optionPessoaPorEstado.series[0].data.map(
  (item) => {
    return {
      ...item,
      value: `${((item.value / somaDataPessoaPorEstado) * 100).toFixed(1)}`,
      valorAbsoluto: item.value,
    };
  },
);

const elGraficoPessoasPorEstado = document.querySelector(
  "#graficoPessoasPorEstado",
);

if (elGraficoPessoasPorEstado) {
  let graficoPessoasPorEstado = echarts.init(elGraficoPessoasPorEstado, null, {
    height: 250,
  });
  optionPessoaPorEstado.series[0].data = optionsPessoaPorEstadoClone;
  graficoPessoasPorEstado.setOption(optionPessoaPorEstado);
}
colecaoConfiguracoesGraficosPf.push(optionPessoaPorEstado);
/* FIM PESSOAS POR ESTADO */

/* PESSOAS POR REGIÃO */
const optionPessoasPorRegiao = {
  tooltip: {
    trigger: "item",
    formatter: function (params) {
      return `<b>${params.data.name}</b><br>
              <b>Quantidade:</b> ${formatarNumeroMilharesCentenas(
                params.data.value,
              )}<br>
              <b>Percentual:</b> ${(
                (params.data.value / totalPopulacaoBrasil) *
                100
              ).toFixed(1)}%
        `;
    },
  },
  label: {
    formatter: function (params) {
      const label = params.data.name;
      const valor = params.data.value;
      const percentual = ((valor / totalPopulacaoBrasil) * 100).toFixed(1);
      return `${label}:\n ${percentual}%`;
    },
  },

  series: [
    {
      type: "treemap",
      breadcrumb: {
        show: true,
        emptyItemWidth: 0,
      },

      data: [
        {
          name: "Norte",
          value: 7500,
        },
        {
          name: "Nordeste",
          value: 40000,
        },
        {
          name: "Sul",
          value: 15000,
        },
        {
          name: "Sudeste",
          value: 60000,
        },
        {
          name: "Centro-oeste",
          value: 4000,
        },
      ],
    },
  ],
};

const elGraficoPessoasPorRegiao = document.querySelector(
  "#graficoPessoasPorRegiao",
);

const totalPopulacaoBrasil = optionPessoasPorRegiao.series[0].data.reduce(
  (total, regiao) => total + regiao.value,
  0,
);
const percentuaisPopulacaoBrasil = optionPessoasPorRegiao.series[0].data.map(
  (regiao) => ((regiao.value / totalPopulacaoBrasil) * 100).toFixed(1),
);

if (elGraficoPessoasPorRegiao) {
  let graficoPessoasPorRegiao = echarts.init(elGraficoPessoasPorRegiao, null, {
    height: 250,
  });

  graficoPessoasPorRegiao.setOption(optionPessoasPorRegiao);
}
colecaoConfiguracoesGraficosPf.push(optionPessoasPorRegiao);
/* FIM PESSOAS POR REGIÃO */

/* PESSOAS POR SEXO */
const optionPessoasPorSexo = {
  tooltip: {
    trigger: "item",
    formatter: function (params) {
      return `<b>Quantidade:</b> ${formatarNumeroMilharesCentenas(
        params.value,
      )}`;
    },
  },
  label: {
    position: "inside",
    formatter: function (params) {
      const total = totalPessoasPorSexo / 2;
      const percentual = (params.value / total) * 100;
      return `${percentual.toFixed(1)}%`;
    },
  },
  legend: {
    top: "5%",
    left: "center",
    selectedMode: false,
  },
  grid: {
    top: "10%",
    left: "5%",
    right: "5%",
    bottom: "0%",
    containLabel: true,
  },
  series: [
    {
      name: "",
      type: "pie",
      radius: ["30%", "100%"],
      center: ["50%", "75%"],
      startAngle: 180,
      data: [
        { value: 35644, name: "Homem" },
        { value: 55323, name: "Mulher" },
        { value: 15542, name: "Indefinido" },
        {
          // Define a parte invisível do gráfico somando todos os valores e mantém oculto para exibir metade do donnut
          value: 35644 + 55323 + 15542,
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

const elGraficoPessoaPorSexo = document.querySelector("#graficoPessoasPorSexo");
const totalPessoasPorSexo = optionPessoasPorSexo.series[0].data.reduce(
  (acumulador, itemAtual) => {
    return acumulador + itemAtual.value;
  },
  0,
);

if (elGraficoPessoaPorSexo) {
  let graficoPessoasPorSexo = echarts.init(elGraficoPessoaPorSexo, null, {
    height: 250,
  });
  graficoPessoasPorSexo.setOption(optionPessoasPorSexo);
}
colecaoConfiguracoesGraficosPf.push(optionPessoasPorSexo);
/* FIM PESSOAS POR SEXO */

/* PESSOAS POR GERAÇÃO */
const optionPessoasPorGeracao = {
  tooltip: {
    formatter: function (params) {
      return `<b>Quantidade:</b> ${formatarNumeroMilharesCentenas(
        params.data.value,
      )}`;
    },
  },
  legend: {
    show: true,
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
        show: true,
        formatter: function (params) {
          return `${params.percent.toFixed(1)}%`;
        },
      },
      data: [
        { value: 1355, name: "Veteranos" },
        { value: 5644, name: "Baby Boomer" },
        { value: 1234, name: "Gen X" },
        { value: 4578, name: "Gen Y" },
        { value: 5566, name: "Gen Z" },
      ],
    },
  ],
};

const elGraficoPessoasPorGeracao = document.querySelector(
  "#graficoPessoasPorGeracao",
);
if (elGraficoPessoasPorGeracao) {
  let graficoPessoasPorGeracao = echarts.init(
    elGraficoPessoasPorGeracao,
    null,
    {
      height: 250,
    },
  );
  graficoPessoasPorGeracao.setOption(optionPessoasPorGeracao);
}
colecaoConfiguracoesGraficosPf.push(optionPessoasPorGeracao);
/* FIM PESSOAS POR GERAÇÃO */

/* PERSONA DE CRÉDITO */
let optionPersonaCredito = {
  label: {
    show: true,
    rotate: 90,
    formatter: function (params) {
      const percentual = `${
        optionPersonaCreditoClone[params.componentIndex].data[0]
      }`;
      return `${percentual}%`;
    },
  },

  tooltip: {
    trigger: "item",
    formatter: function (params) {
      const valorTotal =
        optionPersonaCreditoClone[params.componentIndex].valorAbsoluto;

      return `<b>Quantidade</b>: ${formatarNumeroMilharesCentenas(
        valorTotal,
      )} `;
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
    show: false,
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
const elGraficoPersonaCredito = document.querySelector(
  "#graficoPersonaCredito",
);

const somaPersonaCredito = optionPersonaCredito.series.reduce(
  (acumulador, itemAtual) => {
    return acumulador + itemAtual.data[0];
  },
  0,
);

const optionPersonaCreditoClone = optionPersonaCredito.series.map((item) => {
  return {
    ...item,
    valorAbsoluto: item.data[0],
    data: [`${((item.data[0] / somaPersonaCredito) * 100).toFixed(1)}`],
  };
});

if (elGraficoPersonaCredito) {
  let graficoPersonaCredito = echarts.init(elGraficoPersonaCredito, null, {
    height: 250,
  });
  graficoPersonaCredito.series = optionPersonaCreditoClone;
  graficoPersonaCredito.setOption(optionPersonaCredito);
}
colecaoConfiguracoesGraficosPf.push(optionPersonaCredito);
/* FIM PERSONA DE CRÉDITO */

/* PERSONA DIGITAL */
const optionPersonaDigital = {
  tooltip: {
    trigger: "item",
    formatter: function (params) {
      return `<b>Quantidade:</b> ${formatarNumeroMilharesCentenas(
        params.value,
      )}`;
    },
  },

  series: [
    {
      name: "",
      type: "funnel",
      left: "center",
      top: 10,
      bottom: 10,
      width: "80%",
      min: 1789,
      max: 17568,
      minSize: "0%",
      maxSize: "100%",
      sort: "descending",
      gap: 2,

      label: {
        show: true,
        position: "inside",
        formatter: function (params) {
          return `${params.name}\n${params.percent.toFixed(1)}%`;
        },
        textStyle: {
          textShadow: "none",
          textShadowBlur: "none",
          borderWidth: 0,
        },
      },
      data: [
        { value: 15544, name: "Digital--" },
        { value: 11243, name: "Digital-" },
        { value: 17568, name: "Digital+-" },
        { value: 3568, name: "Digital+" },
        { value: 5633, name: "Digital++" },
      ],
    },
  ],
};

const elGraficoPessoaDigital = document.querySelector("#graficoPersonaDigital");
if (elGraficoPessoaDigital) {
  let graficoPersonaDigital = echarts.init(elGraficoPessoaDigital, null, {
    height: 250,
  });
  graficoPersonaDigital.setOption(optionPersonaDigital);
}
colecaoConfiguracoesGraficosPf.push(optionPersonaDigital);
/* FIM PERSONA DIGITAL */

/* POSSÍVEL ESCOLARIDADE */
const optionPossivelEscolaridade = {
  tooltip: {
    trigger: "item",
    formatter: function (params) {
      const label = params.data.name;
      const valor = params.data.value;
      const percentual = (
        (params.data.value / totalDadosEscolaridades) *
        100
      ).toFixed(1);

      return `
        <b>Ensino ${label}</b><br>
        <b>Quantidade</b>: ${formatarNumeroMilharesCentenas(
          valor,
        )} (${percentual}%)
      `;
    },
  },

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
    max: 25000,
    startAngle: 180,
    show: false,
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
      rotate: 270,
      textStyle: {
        fontSize: 10,
      },
    },
  },

  series: {
    type: "bar",
    data: [
      { value: 1226, name: "Fundamental" },
      { value: 5903, name: "Médio" },
      { value: 11732, name: "Técnico" },
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
        let arrColors = [...eChartsGlobalConfig.color];
        let colors = arrColors.slice(0, 6);
        return colors[params.dataIndex];
      },
    },
  },
};

const elGraficoPossivelEscolaridade = document.querySelector(
  "#graficoPossivelEscolaridade",
);

const totalDadosEscolaridades = optionPossivelEscolaridade.series.data.reduce(
  (acumulador, itemAtual) => {
    return acumulador + itemAtual.value;
  },
  0,
);
if (elGraficoPossivelEscolaridade) {
  let graficoPossivelEscolaridade = echarts.init(
    elGraficoPossivelEscolaridade,
    null,
    {
      height: 250,
    },
  );
  graficoPossivelEscolaridade.setOption(optionPossivelEscolaridade);
}

colecaoConfiguracoesGraficosPf.push(optionPossivelEscolaridade);
/* FIM POSSÍVEL ESCOLARIDADE */

/* PERSONA DEMOGRÁFICA */

const optionPersonaDemografica = {
  grid: {
    top: "1%",
    left: "1%",
    right: "1%",
    bottom: "1%",
    width: "100%",
  },

  tooltip: {
    trigger: "item",
    formatter: function (params) {
      return `<b>${params.data.name}</b><br>
              <b>Quantidade:</b> ${formatarNumeroMilharesCentenas(
                params.data.value,
              )}<br>
              <b>Percentual:</b> ${(
                (params.data.value / totalPersonaDemografica) *
                100
              ).toFixed(1)}%
        `;
    },
  },

  label: {
    formatter: function (params) {
      const label = params.data.name;
      const valor = params.data.value;
      const percentual = ((valor / totalPersonaDemografica) * 100).toFixed(1);
      return `${label}:\n ${percentual}%`;
    },
  },
  levels: {
    show: false,
  },

  series: [
    {
      type: "treemap",
      // roam: false,
      breadcrumb: {
        show: true,
        emptyItemWidth: 0,
      },
      data: [
        {
          name: "Adulto vida modesta",
          value: 36177318,
        },
        {
          name: "Quero descansar",
          value: 25479843,
        },
        {
          name: "Jovem nem nem",
          value: 23428368,
        },
        {
          name: "Homem provedor",
          value: 15987154,
        },
        {
          name: "Mulher com foco no emprego",
          value: 14006947,
        },
        {
          name: "Jovem inicio de trabalho",
          value: 13443300,
        },
        {
          name: "Jovem aprendiz",
          value: 12124606,
        },
        {
          name: "Veterano sobrevivente",
          value: 9892046,
        },
        {
          name: "Veterana solitária",
          value: 9774377,
        },
        {
          name: "Adulto sem estudo",
          value: 5915676,
        },
        {
          name: "Veterano aposentado",
          value: 4576035,
        },
        {
          name: "Jovem bem encaminhado",
          value: 4213474,
        },
        {
          name: "Vida sofrida",
          value: 4002105,
        },
        {
          name: "Jovem-carreira-definida",
          value: 3513170,
        },
        {
          name: "Dependente social",
          value: 3438332,
        },
        {
          name: "Homem com foco no trabalho",
          value: 3369746,
        },
        {
          name: "Vida de aposentado",
          value: 3265633,
        },
        {
          name: "Homem com foco na estabilidade",
          value: 3263025,
        },
        {
          name: "Jovem carreira definida",
          value: 3071811,
        },
        {
          name: "Quero aproveitar a vida",
          value: 2973879,
        },
        {
          name: "Senhora dependente",
          value: 2839292,
        },
        {
          name: "Mulher com foco na família",
          value: 2825548,
        },
        {
          name: "Quero sossego",
          value: 2535965,
        },
        {
          name: "Mulher com foco na carreira",
          value: 2469131,
        },
        {
          name: "Vitoriosa",
          value: 2238869,
        },
        {
          name: "Vovozinho",
          value: 1976772,
        },
        {
          name: "Vovozinha",
          value: 1452660,
        },
        {
          name: "Aposentado por idade",
          value: 1151298,
        },
        {
          name: "Veterano aproveitando a vida",
          value: 1031646,
        },
        {
          name: "Serviços gerais",
          value: 703363,
        },
        {
          name: "Veterana aproveitando a vida",
          value: 666014,
        },
        {
          name: "Jovem esperança",
          value: 652149,
        },
        {
          name: "Adulto de sucesso",
          value: 589541,
        },
        {
          name: "Conquistador",
          value: 587078,
        },
        {
          name: "Subempregado",
          value: 315693,
        },
        {
          name: "Mulher de sucesso",
          value: 298687,
        },
        {
          name: "Dona do destino",
          value: 275651,
        },
        {
          name: "Jovem bombando",
          value: 240376,
        },
        {
          name: "Estudante boa vida",
          value: 210667,
        },
        {
          name: "Dona de casa",
          value: 191224,
        },
        {
          name: "Jovem influente",
          value: 139776,
        },
        {
          name: "Nem trabalha nem é aposentado",
          value: 130689,
        },
        {
          name: "Veterano poderoso",
          value: 115002,
        },
        {
          name: "Veterana culta",
          value: 50499,
        },
        {
          name: "Youtuber",
          value: 3344,
        },
        {
          name: "Blogueira",
          value: 2437,
        },
      ],
    },
  ],
};

const elPersonaDemografica = document.querySelector(
  "#graficoPersonaDemografica",
);

const totalPersonaDemografica = optionPersonaDemografica.series[0].data.reduce(
  (acumulador, itemAtual) => {
    return acumulador + itemAtual.value;
  },
  0,
);

if (elPersonaDemografica) {
  let graficoPersonaDemografica = echarts.init(elPersonaDemografica, null, {
    height: 250,
  });
  graficoPersonaDemografica.setOption(optionPersonaDemografica);
}
colecaoConfiguracoesGraficosPf.push(optionPersonaDemografica);
/* FIM PERSONA DEMOGRÁFICA */

/* PROPENSÃO DE PAGAMENTO */
const optionPropensaoPagamento = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        show: false,
      },
    },
    formatter: function (params) {
      return `
        <b>Quantidade:</b> ${formatarNumeroMilharesCentenas(
          params[0].value,
        )}<br>
      `;
    },
  },

  grid: {
    top: "5%",
    left: "1%",
    right: "1%",
    bottom: "1%",
    containLabel: true,
  },

  label: {
    show: true,
    position: "top",
    formatter: function (params) {
      const valor = params.value;
      const percentual = ((valor / totalPropensaoPagamento) * 100).toFixed(2);
      return `${percentual}%`;
    },
  },

  axisPointer: {
    label: {
      show: false,
    },
  },

  xAxis: [
    {
      type: "category",
      axisTick: {
        alignWithLabel: true,
      },
      data: ["Muito alta", "Alta", "Média", "Baixa", "Muito Baixa", "Zerada"],
    },
  ],
  yAxis: [
    {
      show: true,
      type: "value",
      position: "right",
      alignTicks: true,
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: true,
      },
    },
  ],
  series: [
    {
      name: "Quantidade",
      type: "bar",
      data: [
        {
          value: 5535,
          itemStyle: {
            color: "#00D59A",
          },
        },
        {
          value: 4525,
          itemStyle: {
            color: "#3A7DE8",
          },
        },
        {
          value: 3526,
          itemStyle: {
            color: "#93a1c1",
          },
        },
        {
          value: 15426,
          itemStyle: {
            color: "#FFAF26",
          },
        },
        {
          value: 1541,
          itemStyle: {
            color: "#FF6565",
          },
        },
        {
          value: 1,
          itemStyle: {
            color: "#6456BB",
          },
        },
      ],
    },
  ],
};

const elGraficoPropensaoPagamento = document.querySelector(
  "#graficoPropensaoPagamento",
);

const totalPropensaoPagamento = optionPropensaoPagamento.series[0].data.reduce(
  (acumulador, itemAtual) => {
    return acumulador + itemAtual.value;
  },
  0,
);

if (elGraficoPropensaoPagamento) {
  let graficoPropensaoPagamento = echarts.init(
    elGraficoPropensaoPagamento,
    null,
    {
      height: 250,
    },
  );
  graficoPropensaoPagamento.setOption(optionPropensaoPagamento);
}
colecaoConfiguracoesGraficosPf.push(optionPropensaoPagamento);
/* FIM PROPENSÃO DE PAGAMENTO */

/* COLLECTION STORE */
const optionCollectionScore = {
  legend: {
    orient: "horizontal",
    top: "top",
    left: 0,
    width: "600px",
    itemGap: 4,
  },
  tooltip: {
    trigger: "item",
    formatter: function (params) {
      return `<b>Quantidade</b>: ${formatarNumeroMilharesCentenas(
        params.value,
      )}`;
    },
  },

  grid: {
    top: "1%",
    left: "1%",
    right: "1%",
    bottom: "1%",
    containLabel: true,
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
      roseType: "area",

      label: {
        show: true,
        formatter: function (params) {
          return `${params.percent.toFixed(1)}%`;
        },
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

const elGraficoCollectionScore = document.querySelector(
  "#graficoCollectionScore",
);
if (elGraficoCollectionScore) {
  let graficoCollectionScore = echarts.init(elGraficoCollectionScore, null, {
    height: 275,
  });

  graficoCollectionScore.setOption(optionCollectionScore);
}
colecaoConfiguracoesGraficosPf.push(optionCollectionScore);
/* FIM COLLECTION STORE */

/* VÍNCULO SOCIETÁRIO */
const optionVinculoSocietario = {
  tooltip: {
    trigger: "item",
    formatter: function (params) {
      return `<b>Quantidade</b>: ${formatarNumeroMilharesCentenas(
        params.data.value,
      )}`;
    },
  },
  label: {
    show: true,
    position: "inside",
    formatter: function (params) {
      return `${params.percent.toFixed(1)}%`;
    },
  },
  legend: {
    orient: "horizontal",
    top: "top",
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
      type: "pie",
      radius: "70%",
      data: [
        { value: 1048, name: "Grande" },
        { value: 735, name: "Média" },
        { value: 580, name: "Pequena" },
        { value: 484, name: "Micro" },
        { value: 384, name: "MEI" },
      ],

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

const elGraficoVinculoSocietario = document.querySelector(
  "#graficoVinculoSocietario",
);
if (elGraficoVinculoSocietario) {
  let graficoVinculoSocietario = echarts.init(
    elGraficoVinculoSocietario,
    null,
    {
      height: 250,
    },
  );
  graficoVinculoSocietario.setOption(optionVinculoSocietario);
}
colecaoConfiguracoesGraficosPf.push(optionVinculoSocietario);
/* FIM VÍNCULO SOCIETÁRIO */

/* DISTRIBUIÇÃO DE RENDA */

const optionDistribuicaoRenda = {
  tooltip: {
    trigger: "item",
    formatter: `
      <b>{a}</b>: {b}<br/> 
      <b>Nº total</b>: {c}<br/> 
      <b>Percentual</b>: {d}%
    `,
  },

  grid: {
    top: "1%",
    left: "1%",
    right: "1%",
    bottom: "1%",
    containLabel: true,
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
      center: ["50%", "55%"],
      label: {
        show: false,
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
      radius: ["50%", "55%"],
      center: ["50%", "55%"],
      labelLine: {
        length: 30,
      },
      label: {
        formatter: "{d}%",
        backgroundColor: "#F6F8FC",
        borderColor: "transparent",
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

const elGraficoDistribuicaoRenda = document.querySelector(
  "#graficoDistribuicaoRenda",
);

if (elGraficoDistribuicaoRenda) {
  let graficoDistribuicaoRenda = echarts.init(
    elGraficoDistribuicaoRenda,
    optionDistribuicaoRenda,
    {
      height: 250,
    },
  );
  graficoDistribuicaoRenda.setOption(optionDistribuicaoRenda);
}
colecaoConfiguracoesGraficosPf.push(optionDistribuicaoRenda);
/* FIM DISTRIBUIÇÃO DE RENDA */

/* CONSULTADOS EM 6 E 12 MESES */
const optionConsultaUltimoAno = {
  tooltip: {
    trigger: "item",
    formatter: function (params) {
      return `<b>Quantidade:</b> ${formatarNumeroMilharesCentenas(
        params.data.value,
      )}`;
    },
  },
  label: {
    formatter: function (params) {
      return `${(params.percent * 2).toFixed(1)}%`;
    },
  },
  grid: {
    top: "5%",
    left: "5%",
    right: "5%",
    bottom: "5%",
    containLabel: true,
  },
  legend: {
    left: "40%",
    top: "center",
    selectedMode: false,
    orient: "vertical",
  },
  series: [
    {
      name: "",
      type: "pie",
      radius: ["40%", "70%"],
      center: ["50%", "50%"],
      startAngle: 90,

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

const elGraficoConsultasUltimoAno = document.querySelector(
  "#graficoConsultasUltimoAno",
);
if (elGraficoConsultasUltimoAno) {
  let graficoConsultasUltimoAno = echarts.init(
    elGraficoConsultasUltimoAno,
    null,
    {
      height: 250,
    },
  );
  graficoConsultasUltimoAno.setOption(optionConsultaUltimoAno);
}
colecaoConfiguracoesGraficosPf.push(optionConsultaUltimoAno);
/* FIM CONSULTADOS EM 6 E 12 MESES */

// Valores das colunas
const colunaValoresIndicadoresGerais = [
  18, 15, 12, 19, 15, 10, 15, 12, 19, 15, 10, 15, 12, 19, 15, 10, 15, 12, 19,
  15, 10, 15, 12, 19, 15, 10, 15, 12, 19, 15,
];

// Calcula os valores acumulados
const valoresAcumuladosIndicadoresGerais = colunaValoresIndicadoresGerais.map(
  (value, index, array) =>
    array.slice(0, index + 1).reduce((acc, curr) => acc + curr),
);

const totalAcumuladoIndicadoresGerais = colunaValoresIndicadoresGerais.reduce(
  (acumulador, itemAtual) => {
    return acumulador + itemAtual;
  },
  0,
);

const valoresIndicadoresGerais = colunaValoresIndicadoresGerais.map(
  (item, index) => {
    return {
      ...item,
      value: item,
      percent: `${((item / totalAcumuladoIndicadoresGerais) * 100).toFixed(1)}`,
      itemStyle: {
        color: getChartColors(index),
      },
    };
  },
);

const arrUltimos30Dias = [];
const hoje = dayjs();
for (let dia = 0; dia < 30; dia++) {
  const data = hoje.subtract(dia, "day");
  arrUltimos30Dias.push(data);
}

const ultimos30DiasOrdenados = arrUltimos30Dias.sort((a, b) =>
  dayjs(a).isAfter(dayjs(b)) ? 1 : -1,
);

const ultimos30DiasFormatados = ultimos30DiasOrdenados.map((dia) => {
  return dia.format("DD/MM/YYYY");
});

const ultimos30DiasFormatadosDiaMes = ultimos30DiasOrdenados.map((dia) => {
  return dia.format("DD/MM");
});

const configuracaoIndicadoresGerais = {
  grid: {
    left: "5%",
    right: "5%",
  },
  tooltip: {
    formatter: function (params) {
      const index = params.dataIndex;
      const dia = ultimos30DiasFormatados[index];
      const diasTexto = index < 1 ? "dia" : "dias";

      const arrayAcumulados = colunaValoresIndicadoresGerais.slice(
        0,
        params.dataIndex + 1,
      );
      const totalAcumulado = arrayAcumulados.reduce((acumulador, itemAtual) => {
        return acumulador + itemAtual;
      }, 0);

      return `
          <b>Dia:</b> ${dia} (${index + 1} ${diasTexto})<br>
          <b>${params.value}</b> enriquecidos<br>
          <b>${totalAcumulado}</b> acumulados
        `;
    },
  },

  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ultimos30DiasFormatadosDiaMes,
    axisLabel: {
      formatter: function (data) {
        return `${data}`;
      },
      textStyle: {
        fontSize: 10,
      },
    },
  },
  yAxis: [
    {
      type: "value",
      axisLabel: {
        show: false,
      },
    },
    {
      type: "value", // Eixo secundário
      axisLabel: {
        show: false,
      },
    },
  ],
  series: [
    {
      data: valoresIndicadoresGerais,
      type: "bar",
      label: {
        show: false,
        position: "top",
      },
      z: 2,
    },
    {
      data: valoresAcumuladosIndicadoresGerais,
      type: "line",
      areaStyle: {
        color: "#578BEE",
        opacity: 0.2,
      },
      yAxisIndex: 1,
      z: 1,
    },
  ],
};

const elGraficoIndicadoresGerais = document.querySelector(
  "#graficoIndicadoresGerais",
);

let graficoIndicadoresGerais;

if (elGraficoIndicadoresGerais) {
  if (elGraficoIndicadoresGerais) {
    graficoIndicadoresGerais = echarts.init(elGraficoIndicadoresGerais, null, {
      height: 300,
    });
    graficoIndicadoresGerais.setOption(configuracaoIndicadoresGerais);
  }
}
