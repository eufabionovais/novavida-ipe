const colecaoConfiguracoesGraficosPJ = [];

function formatarNumeroMilharesCentenas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

/* GRÁFICO SITUAÇÃO CADASTRAL PJ */
let optionSituacaoCadastralPJ = {
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
        optionSituacaoCadastralPjClone[params.componentIndex].valorAbsoluto;

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
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [9793],
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
      data: [2210],
    },
    {
      name: "Inapto",
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
      name: "Baixado",
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
      name: "Nulo",
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

const elGraficoSituacaoCadastralPJ = document.querySelector(
  "#graficoSituacaoCadastralPJ",
);

const somaDataSituacaoCadastralPJ = optionSituacaoCadastralPJ.series.reduce(
  (acumulador, itemAtual) => {
    return acumulador + itemAtual.data[0];
  },
  0,
);

const optionSituacaoCadastralPjClone = optionSituacaoCadastralPJ.series.map(
  (item) => {
    return {
      ...item,
      valorAbsoluto: item.data[0],
      data: [
        `${((item.data[0] / somaDataSituacaoCadastralPJ) * 100).toFixed(1)}`,
      ],
    };
  },
);

if (elGraficoSituacaoCadastralPJ) {
  let graficoSituacaoCadastralPJ = echarts.init(
    elGraficoSituacaoCadastralPJ,
    null,
    {
      height: 250,
    },
  );
  optionSituacaoCadastralPJ.series = optionSituacaoCadastralPjClone;
  graficoSituacaoCadastralPJ.setOption(optionSituacaoCadastralPJ);
}
colecaoConfiguracoesGraficosPJ.push(optionSituacaoCadastralPJ);

/* FIM GRÁFICO SITUAÇÃO CADASTRAL PJ */

/* PORTE DAS EMPRESAS */
let optionPorteEmpresas = {
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
        { value: 1048, name: "Grande" },
        { value: 2563, name: "Média" },
        { value: 4586, name: "Pequena" },
        { value: 10324, name: "Micro" },
        { value: 15698, name: "MEI" },
        {
          // make a record to fill the bottom 50%
          label: {
            show: false,
          },
          value: 1048 + 2563 + 4586 + 10324 + 15698,
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

const elPorteEmpresas = document.querySelector("#graficoPorteEmpresas");
if (elPorteEmpresas) {
  let graficoPorteEmpresas = echarts.init(elPorteEmpresas, null, {
    height: 250,
  });
  graficoPorteEmpresas.setOption(optionPorteEmpresas);
}
colecaoConfiguracoesGraficosPJ.push(optionPorteEmpresas);
/* FIM PORTE DAS EMPRESAS */

/* QUANTIDADE DE SÓCIOS */
const optionQuantidadeSocios = {
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
        formatter: "{d}%",
      },
      data: [
        { value: 1048, name: "1 Sócio" },
        { value: 735, name: "De 2 a 3 Sócios" },
        { value: 580, name: "De 4 a 5 Sócios" },
        { value: 484, name: "+ de 5 Sócios" },
      ],
    },
  ],
};

const elGraficoQuantidadeSocios = document.querySelector(
  "#graficoQuantidadeSocios",
);
if (elGraficoQuantidadeSocios) {
  let graficoQuantidadeSocios = echarts.init(elGraficoQuantidadeSocios, null, {
    height: 250,
  });
  graficoQuantidadeSocios.setOption(optionQuantidadeSocios);
}
colecaoConfiguracoesGraficosPJ.push(optionQuantidadeSocios);
/* FIM QUANTIDADE DE SÓCIOS */

/* TEMPO DE ATIVIDADE */
const optionTempoAtividadePJ = {
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
    left: "25%",
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
        { value: 1048, name: "De 0 a 1 ano" },
        { value: 735, name: "De 1 ano a 5 anos" },
        { value: 1013, name: "De 5 anos a 10 anos" },
        { value: 1, name: "Acima de 10 anos" },
        {
          value: 1048 + 735 + 1013 + 1,
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

const elGraficoTempoAtividadePj = document.querySelector(
  "#graficoTempoAtividadePj",
);
if (elGraficoTempoAtividadePj) {
  let graficoTempoAtividadePj = echarts.init(elGraficoTempoAtividadePj, null, {
    height: 250,
  });
  graficoTempoAtividadePj.setOption(optionTempoAtividadePJ);
}
colecaoConfiguracoesGraficosPJ.push(optionTempoAtividadePJ);
/* FIM TEMPO DE ATIVIDADE */

/* NATUREZA JURIDICA */
let optionNaturezaJuridica = {
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
      start: 0,
      end: 60,
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
        "Sociedade Empresária Limitada",
        "Empresário (Individual)",
        "Associação Privada",
        "Organização Religiosa",
        "Sociedade Anônima Fechada",
        "Empresa individual de responsabilidade limitada (de Natureza Empresária)",
        "Sociedade Simples Limitada",
        "Sociedade Empresária em Nome Coletivo",
        "Condomínio Edilício",
        "Fundação Privada",
        "Cooperativa",
        "Autarquia Federal",
        "Serviço Notarial e Registral (Cartório)",
        "Sociedade Anônima Aberta",
        "Entidade Sindical",
        "Sociedade Empresária em Comandita Simples",
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
        position: ["50%", -40],
        rotate: -90,
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
      ],
    },
  ],
};

const totalDadosNaturezaJuridica = optionNaturezaJuridica.series[0].data.reduce(
  (acumulador, itemAtual) => {
    return acumulador + itemAtual.value;
  },
  0,
);

const optionsNaturezaJuridicaClone = optionNaturezaJuridica.series[0].data.map(
  (item) => {
    return {
      ...item,
      value: `${((item.value / totalDadosNaturezaJuridica) * 100).toFixed(1)}`,
      valorAbsoluto: item.value,
    };
  },
);

const elGraficoNaturezaJuridica = document.querySelector(
  "#graficoNaturezaJuridica",
);

if (elGraficoNaturezaJuridica) {
  let graficoNaturezaJuridica = echarts.init(elGraficoNaturezaJuridica, null, {
    height: 250,
  });
  optionNaturezaJuridica.series[0].data = optionsNaturezaJuridicaClone;
  graficoNaturezaJuridica.setOption(optionNaturezaJuridica);
}
colecaoConfiguracoesGraficosPJ.push(optionNaturezaJuridica);
/* FIM NATUREZA JURIDICA */

/* EMPRESAS POR REGIÃO */
const optionEmpresasPorRegiao = {
  tooltip: {
    trigger: "item",
    formatter: function (params) {
      return `<b>${params.data.name}</b><br>
              <b>Quantidade:</b> ${formatarNumeroMilharesCentenas(
                params.data.value,
              )}<br>
              <b>Percentual:</b> ${(
                (params.data.value / totalEmpresasBrasil) *
                100
              ).toFixed(1)}%
        `;
    },
  },
  label: {
    formatter: function (params) {
      const label = params.data.name;
      const valor = params.data.value;
      const percentual = ((valor / totalEmpresasBrasil) * 100).toFixed(1);
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

const elGraficoEmpresasPorRegiao = document.querySelector(
  "#graficoEmpresasPorRegiao",
);

const totalEmpresasBrasil = optionEmpresasPorRegiao.series[0].data.reduce(
  (total, regiao) => total + regiao.value,
  0,
);
const percentuaisEmpresasBrasil = optionEmpresasPorRegiao.series[0].data.map(
  (regiao) => ((regiao.value / totalEmpresasBrasil) * 100).toFixed(1),
);

if (elGraficoEmpresasPorRegiao) {
  let graficoEmpresasPorRegiao = echarts.init(
    elGraficoEmpresasPorRegiao,
    null,
    {
      height: 250,
    },
  );

  graficoEmpresasPorRegiao.setOption(optionEmpresasPorRegiao);
}
colecaoConfiguracoesGraficosPJ.push(optionEmpresasPorRegiao);
/* FIM EMPRESAS POR REGIÃO */

/* POTENCIAL REGIÃO PJ */
let optionAnalisePotencialRegiaoPJ = {
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
        optionAnalisePotencialRegiaoPjClone[params.componentIndex]
          .valorAbsoluto;

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
      name: "Região verde",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [9793],
      itemStyle: {
        color: "#00D59A",
      },
    },
    {
      name: "Região amarela",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [2210],
      itemStyle: {
        color: "#FFAF26",
      },
    },
    {
      name: "Região vermelha",
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: [1535],
      itemStyle: {
        color: "#FF6565",
      },
    },
  ],
};

const elGraficoProtencialRegiaolPJ = document.querySelector(
  "#graficoPotencialRegiaolPJ",
);

const somaDataPotencialRegiaoPJ = optionAnalisePotencialRegiaoPJ.series.reduce(
  (acumulador, itemAtual) => {
    return acumulador + itemAtual.data[0];
  },
  0,
);

const optionAnalisePotencialRegiaoPjClone =
  optionAnalisePotencialRegiaoPJ.series.map((item) => {
    return {
      ...item,
      valorAbsoluto: item.data[0],
      data: [
        `${((item.data[0] / somaDataPotencialRegiaoPJ) * 100).toFixed(1)}`,
      ],
    };
  });

if (elGraficoProtencialRegiaolPJ) {
  let graficoPotencialRegiaolPJ = echarts.init(
    elGraficoProtencialRegiaolPJ,
    null,
    {
      height: 250,
    },
  );
  optionAnalisePotencialRegiaoPJ.series = optionAnalisePotencialRegiaoPjClone;
  graficoPotencialRegiaolPJ.setOption(optionAnalisePotencialRegiaoPJ);
}
colecaoConfiguracoesGraficosPJ.push(optionAnalisePotencialRegiaoPJ);

/* FIM POTENCIAL REGIÃO PJ */

/* SAÚDE TRIBUTÁRIA */
const configuracaoSaudeTributaria = {
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
    left: "50%",
    top: "center",
    selectedMode: false,
    orient: "vertical",
    align: "right",
  },
  series: [
    {
      name: "",
      type: "pie",
      radius: ["40%", "70%"],
      center: ["50%", "50%"],
      startAngle: -90,

      data: [
        { value: 1048, name: "De 1 a 2 dívidas" },
        { value: 735, name: "De 3  a 4 dívidas" },
        { value: 1013, name: "+ de 5 " },
        { value: 1102, name: "Sem dívidas" },

        {
          value: 1048 + 735 + 1013 + 1102,
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

const elSaudeTributaria = document.querySelector("#graficoSaudeTributariaPj");
if (elSaudeTributaria) {
  let graficoSaudeTributariaPj = echarts.init(elSaudeTributaria, null, {
    height: 250,
  });
  graficoSaudeTributariaPj.setOption(configuracaoSaudeTributaria);
}
colecaoConfiguracoesGraficosPJ.push(configuracaoSaudeTributaria);
/* FIM SAÚDE TRIBUTÁRIA */

/* PERSONAS PJ */
const configuracaoPersonasPj = {
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
    left: "50%",
    top: "center",
    selectedMode: false,
    orient: "vertical",
  },
  series: [
    {
      name: "",
      type: "pie",
      radius: ["40%", "70%"],
      center: ["20%", "50%"],
      startAngle: 90,

      data: [
        { value: 533, name: "Empreendedor em formação" },
        { value: 1657, name: "Empreendedor estável" },
        { value: 103, name: "Empreendedor novo" },
        { value: 165, name: "EPP Em formação" },
        { value: 530, name: "EPP estável" },
        { value: 151, name: "EPP novo" },
        { value: 735, name: "Médias/Grandes Em formação" },
        { value: 805, name: "Médias/Grandes estável" },
        { value: 1110, name: "Médias/Grandes novo" },

        {
          value: 533 + 1657 + 103 + 165 + 530 + 151 + 735 + 805 + 1110,
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

const elPersonasPj = document.querySelector("#graficoPersonasPj");
if (elPersonasPj) {
  let graficoPersonasPj = echarts.init(elPersonasPj, null, {
    height: 250,
  });
  graficoPersonasPj.setOption(configuracaoPersonasPj);
}
colecaoConfiguracoesGraficosPJ.push(configuracaoPersonasPj);
/* FIM PERSONAS PJ */

/* DEALER PJ */
let configuracaoDealerPJ = {
  label: {
    show: true,
    // rotate: 90,
    position: ["50%", "20%"],
    formatter: function (params) {
      const percentual = Number(params.value);
      return `${percentual}%`;
    },
    align: "center",
  },

  tooltip: {
    trigger: "item",
    formatter: function (params) {
      const valorTotal =
        configuracaoDealerPJClone[params.componentIndex].valorAbsoluto;

      return `<b>Quantidade</b>: ${formatarNumeroMilharesCentenas(
        valorTotal,
      )} `;
    },
  },
  legend: {
    orient: "horizontal",
    left: "center",
    right: "auto",
    top: 210,
  },

  grid: {
    top: "5%",
    left: "5%",
    right: "5%",
    bottom: "25%",
    containLabel: true,
  },

  xAxis: {
    type: "category",
    data: [],
  },
  yAxis: {
    type: "value",
    show: false,
  },

  series: [
    {
      name: "Big",
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
      name: "Good",
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
      name: "Master",
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

const elGraficoDealerPj = document.querySelector("#graficoDealerPj");

const somaDealerPj = configuracaoDealerPJ.series.reduce(
  (acumulador, itemAtual) => {
    return acumulador + itemAtual.data[0];
  },
  0,
);

const configuracaoDealerPJClone = configuracaoDealerPJ.series.map((item) => {
  return {
    ...item,
    valorAbsoluto: item.data[0],
    data: [`${((item.data[0] / somaDealerPj) * 100).toFixed(1)}`],
  };
});

if (elGraficoDealerPj) {
  let graficoDealerPj = echarts.init(elGraficoDealerPj, null, {
    height: 250,
  });
  configuracaoDealerPJ.series = configuracaoDealerPJClone;
  graficoDealerPj.setOption(configuracaoDealerPJ);
}
colecaoConfiguracoesGraficosPJ.push(configuracaoDealerPJ);

/* FIM DEALER PJ */

/* MCC */
let configuracoesMcc = {
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
      start: 0,
      end: 60,
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
        "MCC",
        "Agrotudo",
        "Artigos eletrônicos",
        "Atacadista",
        "Beleza",
        "Casa",
        "Cultura",
        "Direto do fabricante",
        "Educação",
        "Fármacias",
        "Hoteis",
        "Informatica",
        "Joalheria",
        "Linhas aéreas",
        "Locação",
        "Lojas de Departamento",
        "Materiais de construção",
        "Moveis",
        "Oficinas de Manutenção",
        "Outros",
        "Petshop",
        "Postos de gasolina",
        "Restaurante",
        "Serviços de Construção",
        "Serviços em geral",
        "Serviços Financeiros",
        "Serviços Médico Hospitalar",
        "Supermercado",
        "Telemarketing",
        "Transporte de carga",
        "Transporte de passageiro",
        "Turismo",
        "Utilidade pública",
        "Varejo",
        "Veículos",
        "Recolher",
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
        position: ["50%", -40],
        rotate: -90,
        textShadowBlur: 0,
        borderWidth: 0,
        textStyle: labelTextConfigs,

        formatter: function (params) {
          return `${params.value}%`;
        },
      },

      // data: [
      //   {
      //     value: 601100,
      //     itemStyle: {
      //       color: "#00D59A",
      //     },
      //   },
      //   {
      //     value: 2208680,
      //     itemStyle: {
      //       color: "#3A7DE8",
      //     },
      //   },
      //   {
      //     value: 2799002,
      //     itemStyle: {
      //       color: "#93a1c1",
      //     },
      //   },
      //   {
      //     value: 574804,
      //     itemStyle: {
      //       color: "#FFAF26",
      //     },
      //   },
      //   {
      //     value: 10923616,
      //     itemStyle: {
      //       color: "#FF6565",
      //     },
      //   },
      //   {
      //     value: 6352015,
      //     itemStyle: {
      //       color: "#6456BB",
      //     },
      //   },
      //   {
      //     value: 2935056,
      //     itemStyle: {
      //       color: "#68C7AC",
      //     },
      //   },
      //   {
      //     value: 3529246,
      //     itemStyle: {
      //       color: "#71A5D5",
      //     },
      //   },
      //   {
      //     value: 5592545,
      //     itemStyle: {
      //       color: "#e2db46",
      //     },
      //   },
      //   {
      //     value: 4305869,
      //     itemStyle: {
      //       color: "#FFC27D",
      //     },
      //   },
      //   {
      //     value: 18755761,
      //     itemStyle: {
      //       color: "#FF8E8E",
      //     },
      //   },
      //   {
      //     value: 2354464,
      //     itemStyle: {
      //       color: "#8E77D4",
      //     },
      //   },
      //   {
      //     value: 2740032,
      //     itemStyle: {
      //       color: "#9BD9C4",
      //     },
      //   },
      //   {
      //     value: 5485138,
      //     itemStyle: {
      //       color: "#8CB3E6",
      //     },
      //   },
      //   {
      //     value: 2821651,
      //     itemStyle: {
      //       color: "#E8E8F4",
      //     },
      //   },
      //   {
      //     value: 7341548,
      //     itemStyle: {
      //       color: "#FFD885",
      //     },
      //   },
      // ],
      data: [
        { value: 818697, itemStyle: { color: "#A793D0" } },
        { value: 198412, itemStyle: { color: "#FFC27D" } },
        { value: 815455, itemStyle: { color: "#FFDCB3" } },
        { value: 341671, itemStyle: { color: "#93a1c1" } },
        { value: 625692, itemStyle: { color: "#68C7AC" } },
        { value: 224332, itemStyle: { color: "#ECECF8" } },
        { value: 365080, itemStyle: { color: "#FFD885" } },
        { value: 581320, itemStyle: { color: "#ACDFD0" } },
        { value: 734693, itemStyle: { color: "#FFC27D" } },
        { value: 832255, itemStyle: { color: "#BBE9DE" } },
        { value: 284906, itemStyle: { color: "#93a1c1" } },
        { value: 796540, itemStyle: { color: "#FFD885" } },
        { value: 792075, itemStyle: { color: "#A4C8EA" } },
        { value: 577476, itemStyle: { color: "#FFDCB3" } },
        { value: 431613, itemStyle: { color: "#8E77D4" } },
        { value: 228489, itemStyle: { color: "#FF6565" } },
        { value: 472360, itemStyle: { color: "#8CB3E6" } },
        { value: 381457, itemStyle: { color: "#FFC9C9" } },
        { value: 899290, itemStyle: { color: "#A793D0" } },
        { value: 684660, itemStyle: { color: "#FF6565" } },
        { value: 361738, itemStyle: { color: "#FFDCB3" } },
        { value: 707116, itemStyle: { color: "#3A7DE8" } },
        { value: 565628, itemStyle: { color: "#C7B2E4" } },
        { value: 714101, itemStyle: { color: "#FF9999" } },
        { value: 936111, itemStyle: { color: "#68C7AC" } },
        { value: 763230, itemStyle: { color: "#9BD9C4" } },
        { value: 447209, itemStyle: { color: "#A4C8EA" } },
        { value: 804048, itemStyle: { color: "#FFC27D" } },
        { value: 515917, itemStyle: { color: "#FF6565" } },
        { value: 475983, itemStyle: { color: "#FF8E8E" } },
        { value: 433666, itemStyle: { color: "#FF8E8E" } },
        { value: 687839, itemStyle: { color: "#6456BB" } },
        { value: 308763, itemStyle: { color: "#FFAF26" } },
        { value: 781136, itemStyle: { color: "#E2DB46" } },
        { value: 761029, itemStyle: { color: "#71A5D5" } },
        { value: 835442, itemStyle: { color: "#FF8E8E" } },
        { value: 913042, itemStyle: { color: "#8CB3E6" } },
      ],
    },
  ],
};

const totalMcc = configuracoesMcc.series[0].data.reduce(
  (acumulador, itemAtual) => {
    return acumulador + itemAtual.value;
  },
  0,
);

const configuracoesMccClone = configuracoesMcc.series[0].data.map((item) => {
  return {
    ...item,
    value: `${((item.value / totalMcc) * 100).toFixed(1)}`,
    valorAbsoluto: item.value,
  };
});

const elGraficoMcc = document.querySelector("#graficoMcc");

if (elGraficoMcc) {
  let graficoMcc = echarts.init(elGraficoMcc, null, {
    height: 250,
  });
  configuracoesMcc.series[0].data = configuracoesMccClone;
  graficoMcc.setOption(configuracoesMcc);
}
colecaoConfiguracoesGraficosPJ.push(configuracoesMcc);
/* FIM MCC */

/* FLAGS ESTRATÉGICAS DE TELEFONIA */
// let optionFlagsTelefonia = {
//   tooltip: {
//     trigger: "item",
//     formatter: function (params) {
//       return `<b>Quantidade:</b> ${formatarNumeroMilharesCentenas(
//         params.value,
//       )}`;
//     },
//   },
//   label: {
//     show: true,
//     formatter: function (params) {
//       const percent = Number(
//         optionFlagsTelefoniaClone[params.dataIndex].value[0],
//       ).toFixed(1);
//       return `${percent}%`;
//     },
//     position: ["50%", "40%"],
//   },
//   grid: {
//     top: "5%",
//     left: "1%",
//     right: "5%",
//     bottom: "5%",
//     containLabel: true,
//   },
//   xAxis: {
//     type: "value",
//     boundaryGap: [0, 0.01],
//     axisLabel: {
//       show: false,
//     },
//     splitLine: {
//       show: false,
//     },
//   },
//   yAxis: {
//     type: "category",
//     data: ["Badphone", "Assinante", "Hot", "WhatsApp", "Proccon"],
//   },
//   series: [
//     {
//       name: "",
//       type: "bar",
//       barWidth: 35,
//       barHeight: 80,
//       label: {
//         textStyle: labelTextConfigs,
//       },
//       data: [
//         {
//           value: 350456,
//           itemStyle: {
//             color: eChartsGlobalConfig.color[0],
//           },
//         },
//         {
//           value: 123489,
//           itemStyle: {
//             color: eChartsGlobalConfig.color[1],
//           },
//         },
//         {
//           value: 229034,
//           itemStyle: {
//             color: eChartsGlobalConfig.color[2],
//           },
//         },
//         {
//           value: 104970,
//           itemStyle: {
//             color: eChartsGlobalConfig.color[3],
//           },
//         },
//         {
//           value: 131744,
//           itemStyle: {
//             color: eChartsGlobalConfig.color[4],
//           },
//         },
//       ],
//     },
//   ],
// };

// const elFlagsTelefoniaPF = document.querySelector("#graficoFlagsTelefoniaPF");

// const somaDataFlagsTelefonia = optionFlagsTelefonia.series[0].data.reduce(
//   (acumulador, itemAtual) => {
//     return acumulador + itemAtual.value;
//   },
//   0,
// );

// const optionFlagsTelefoniaClone = optionFlagsTelefonia.series[0].data.map(
//   (item) => {
//     return {
//       ...item,
//       valorAbsoluto: item.value,
//       value: [`${((item.value / somaDataFlagsTelefonia) * 100).toFixed(1)}`],
//     };
//   },
// );

// if (elFlagsTelefoniaPF) {
//   let graficoFlagsTelefoniaPF = echarts.init(elFlagsTelefoniaPF, null, {
//     height: 250,
//   });

//   graficoFlagsTelefoniaPF.series = optionFlagsTelefoniaClone;
//   graficoFlagsTelefoniaPF.setOption(optionFlagsTelefonia);
// }
// colecaoConfiguracoesGraficosPJ.push(optionFlagsTelefonia);
/* FIM FLAGS ESTRATÉGICAS DE TELEFONIA */

/* TELEFONES RANKING */
// const optionTelefonesRanking = {
//   tooltip: {
//     trigger: "item",
//     formatter: function (params) {
//       return `<b>Quantidade:</b> ${formatarNumeroMilharesCentenas(
//         params.value,
//       )}`;
//     },
//   },
//   label: {
//     show: true,
//     position: "inside",
//     formatter: function (params) {
//       return `${params.percent.toFixed(1)}%`;
//     },
//   },
//   legend: {
//     orient: "horizontal",
//     top: "top",
//   },

//   grid: {
//     top: "5%",
//     left: "5%",
//     right: "5%",
//     bottom: "5%",
//     containLabel: true,
//   },

//   series: [
//     {
//       name: "",
//       type: "pie",
//       radius: "70%",
//       data: [
//         { value: 1048, name: "Ranking 1" },
//         { value: 735, name: "Ranking 2" },
//         { value: 580, name: "Ranking 3" },
//         { value: 484, name: "Ranking 4" },
//       ],

//       emphasis: {
//         itemStyle: {
//           shadowBlur: 10,
//           shadowOffsetX: 0,
//           shadowColor: "rgba(0, 0, 0, 0.5)",
//         },
//       },
//     },
//   ],
// };

// const elGraficoTelefonesRanking = document.querySelector(
//   "#graficoTelefonesRanking",
// );
// if (elGraficoTelefonesRanking) {
//   let graficoTelefonesRanking = echarts.init(elGraficoTelefonesRanking, null, {
//     height: 250,
//   });
//   graficoTelefonesRanking.setOption(optionTelefonesRanking);
// }
// colecaoConfiguracoesGraficosPJ.push(optionTelefonesRanking);
/* FIM TELEFONES RANKING */

/* PESSOAS POR ESTADO */
// let optionPessoaPorEstado = {
//   tooltip: {
//     trigger: "item",
//     formatter: function (params) {
//       return `<b>Quantidade</b>: ${formatarNumeroMilharesCentenas(
//         params.data.valorAbsoluto,
//       )} `;
//     },
//     axisPointer: {
//       type: "shadow",
//     },
//   },

//   grid: {
//     top: "20%",
//     left: "5%",
//     right: "5%",
//     bottom: "15%",
//     containLabel: true,
//   },
//   dataZoom: [
//     {
//       type: "slider",
//       show: true,
//       xAxisIndex: [0],
//       start: 10,
//       end: 30,
//       bottom: 10,
//       height: 20,
//     },
//   ],

//   xAxis: [
//     {
//       axisLabel: {
//         show: true,
//       },
//       type: "category",
//       data: [
//         "AC",
//         "AL",
//         "AP",
//         "AM",
//         "BA",
//         "CE",
//         "DF",
//         "ES",
//         "GO",
//         "MA",
//         "MT",
//         "MS",
//         "MG",
//         "PA",
//         "PB",
//         "PR",
//         "PE",
//         "PI",
//         "RJ",
//         "RN",
//         "RS",
//         "RO",
//         "RR",
//         "SC",
//         "SP",
//         "SE",
//         "TO",
//       ],
//       axisTick: {
//         alignWithLabel: true,
//       },
//     },
//   ],
//   yAxis: [
//     {
//       type: "value",
//       axisLabel: {
//         show: true,
//       },
//       splitLine: {
//         show: true,
//       },
//     },
//   ],
//   series: [
//     {
//       type: "bar",
//       barWidth: "70%",
//       label: {
//         show: true,
//         position: [15, -40],
//         rotate: -90,
//         textShadowBlur: 0,
//         borderWidth: 0,
//         textStyle: labelTextConfigs,

//         formatter: function (params) {
//           return `${params.value}%`;
//         },
//       },

//       data: [
//         {
//           value: 601100,
//           itemStyle: {
//             color: "#00D59A",
//           },
//         },
//         {
//           value: 2208680,
//           itemStyle: {
//             color: "#3A7DE8",
//           },
//         },
//         {
//           value: 2799002,
//           itemStyle: {
//             color: "#93a1c1",
//           },
//         },
//         {
//           value: 574804,
//           itemStyle: {
//             color: "#FFAF26",
//           },
//         },
//         {
//           value: 10923616,
//           itemStyle: {
//             color: "#FF6565",
//           },
//         },
//         {
//           value: 6352015,
//           itemStyle: {
//             color: "#6456BB",
//           },
//         },
//         {
//           value: 2935056,
//           itemStyle: {
//             color: "#68C7AC",
//           },
//         },
//         {
//           value: 3529246,
//           itemStyle: {
//             color: "#71A5D5",
//           },
//         },
//         {
//           value: 5592545,
//           itemStyle: {
//             color: "#e2db46",
//           },
//         },
//         {
//           value: 4305869,
//           itemStyle: {
//             color: "#FFC27D",
//           },
//         },
//         {
//           value: 18755761,
//           itemStyle: {
//             color: "#FF8E8E",
//           },
//         },
//         {
//           value: 2354464,
//           itemStyle: {
//             color: "#8E77D4",
//           },
//         },
//         {
//           value: 2740032,
//           itemStyle: {
//             color: "#9BD9C4",
//           },
//         },
//         {
//           value: 5485138,
//           itemStyle: {
//             color: "#8CB3E6",
//           },
//         },
//         {
//           value: 2821651,
//           itemStyle: {
//             color: "#E8E8F4",
//           },
//         },
//         {
//           value: 7341548,
//           itemStyle: {
//             color: "#FFD885",
//           },
//         },
//         {
//           value: 2367264,
//           itemStyle: {
//             color: "#FF9999",
//           },
//         },
//         {
//           value: 10225639,
//           itemStyle: {
//             color: "#A793D0",
//           },
//         },
//         {
//           value: 17916646,
//           itemStyle: {
//             color: "#ACDFD0",
//           },
//         },
//         {
//           value: 2591392,
//           itemStyle: {
//             color: "#A4C8EA",
//           },
//         },
//         {
//           value: 1289816,
//           itemStyle: {
//             color: "#ECECF8",
//           },
//         },
//         {
//           value: 383877,
//           itemStyle: {
//             color: "#FFDCB3",
//           },
//         },
//         {
//           value: 11109552,
//           itemStyle: {
//             color: "#FFB8B8",
//           },
//         },
//         {
//           value: 6024825,
//           itemStyle: {
//             color: "#AE9EDA",
//           },
//         },
//         {
//           value: 1748875,
//           itemStyle: {
//             color: "#BBE9DE",
//           },
//         },
//         {
//           value: 49655854,
//           itemStyle: {
//             color: "#B3D0F0",
//           },
//         },
//         {
//           value: 1077129,
//           itemStyle: {
//             color: "#F7F7FD",
//           },
//         },
//       ],
//     },
//   ],
// };

// const somaDataPessoaPorEstado = optionPessoaPorEstado.series[0].data.reduce(
//   (acumulador, itemAtual) => {
//     return acumulador + itemAtual.value;
//   },
//   0,
// );

// const optionsPessoaPorEstadoClone = optionPessoaPorEstado.series[0].data.map(
//   (item) => {
//     return {
//       ...item,
//       value: `${((item.value / somaDataPessoaPorEstado) * 100).toFixed(1)}`,
//       valorAbsoluto: item.value,
//     };
//   },
// );

// const elGraficoPessoasPorEstado = document.querySelector(
//   "#graficoPessoasPorEstado",
// );

// if (elGraficoPessoasPorEstado) {
//   let graficoPessoasPorEstado = echarts.init(elGraficoPessoasPorEstado, null, {
//     height: 250,
//   });
//   optionPessoaPorEstado.series[0].data = optionsPessoaPorEstadoClone;
//   graficoPessoasPorEstado.setOption(optionPessoaPorEstado);
// }
// colecaoConfiguracoesGraficosPJ.push(optionPessoaPorEstado);
/* FIM PESSOAS POR ESTADO */

/* PESSOAS POR REGIÃO */
// const optionPessoasPorRegiao = {
//   tooltip: {
//     trigger: "item",
//     formatter: function (params) {
//       return `<b>${params.data.name}</b><br>
//               <b>Quantidade:</b> ${formatarNumeroMilharesCentenas(
//                 params.data.value,
//               )}<br>
//               <b>Percentual:</b> ${(
//                 (params.data.value / totalPopulacaoBrasil) *
//                 100
//               ).toFixed(1)}%
//         `;
//     },
//   },
//   label: {
//     formatter: function (params) {
//       const label = params.data.name;
//       const valor = params.data.value;
//       const percentual = ((valor / totalPopulacaoBrasil) * 100).toFixed(1);
//       return `${label}:\n ${percentual}%`;
//     },
//   },

//   series: [
//     {
//       type: "treemap",
//       breadcrumb: {
//         show: true,
//         emptyItemWidth: 0,
//       },

//       data: [
//         {
//           name: "Norte",
//           value: 7500,
//         },
//         {
//           name: "Nordeste",
//           value: 40000,
//         },
//         {
//           name: "Sul",
//           value: 15000,
//         },
//         {
//           name: "Sudeste",
//           value: 60000,
//         },
//         {
//           name: "Centro-oeste",
//           value: 4000,
//         },
//       ],
//     },
//   ],
// };

// const elGraficoPessoasPorRegiao = document.querySelector(
//   "#graficoPessoasPorRegiao",
// );

// const totalPopulacaoBrasil = optionPessoasPorRegiao.series[0].data.reduce(
//   (total, regiao) => total + regiao.value,
//   0,
// );
// const percentuaisPopulacaoBrasil = optionPessoasPorRegiao.series[0].data.map(
//   (regiao) => ((regiao.value / totalPopulacaoBrasil) * 100).toFixed(1),
// );

// if (elGraficoPessoasPorRegiao) {
//   let graficoPessoasPorRegiao = echarts.init(elGraficoPessoasPorRegiao, null, {
//     height: 250,
//   });

//   graficoPessoasPorRegiao.setOption(optionPessoasPorRegiao);
// }
// colecaoConfiguracoesGraficosPJ.push(optionPessoasPorRegiao);
/* FIM PESSOAS POR REGIÃO */

/* PESSOAS POR SEXO */
// const optionPessoasPorSexo = {
//   tooltip: {
//     trigger: "item",
//     formatter: function (params) {
//       return `<b>Quantidade:</b> ${formatarNumeroMilharesCentenas(
//         params.value,
//       )}`;
//     },
//   },
//   label: {
//     position: "inside",
//     formatter: function (params) {
//       const total = totalPessoasPorSexo / 2;
//       const percentual = (params.value / total) * 100;
//       return `${percentual.toFixed(1)}%`;
//     },
//   },
//   legend: {
//     top: "5%",
//     left: "center",
//     selectedMode: false,
//   },
//   grid: {
//     top: "10%",
//     left: "5%",
//     right: "5%",
//     bottom: "0%",
//     containLabel: true,
//   },
//   series: [
//     {
//       name: "",
//       type: "pie",
//       radius: ["30%", "100%"],
//       center: ["50%", "75%"],
//       startAngle: 180,
//       data: [
//         { value: 35644, name: "Homem" },
//         { value: 55323, name: "Mulher" },
//         { value: 15542, name: "Indefinido" },
//         {
//           // Define a parte invisível do gráfico somando todos os valores e mantém oculto para exibir metade do donnut
//           value: 35644 + 55323 + 15542,
//           itemStyle: {
//             color: "none",
//             decal: {
//               symbol: "none",
//             },
//           },
//           label: {
//             show: false,
//           },
//         },
//       ],
//     },
//   ],
// };

// const elGraficoPessoaPorSexo = document.querySelector("#graficoPessoasPorSexo");
// const totalPessoasPorSexo = optionPessoasPorSexo.series[0].data.reduce(
//   (acumulador, itemAtual) => {
//     return acumulador + itemAtual.value;
//   },
//   0,
// );

// if (elGraficoPessoaPorSexo) {
//   let graficoPessoasPorSexo = echarts.init(elGraficoPessoaPorSexo, null, {
//     height: 250,
//   });
//   graficoPessoasPorSexo.setOption(optionPessoasPorSexo);
// }
// colecaoConfiguracoesGraficosPJ.push(optionPessoasPorSexo);
/* FIM PESSOAS POR SEXO */

/* PESSOAS POR GERAÇÃO */
// const optionPessoasPorGeracao = {
//   tooltip: {
//     formatter: function (params) {
//       return `<b>Quantidade:</b> ${formatarNumeroMilharesCentenas(
//         params.data.value,
//       )}`;
//     },
//   },
//   legend: {
//     show: true,
//   },

//   series: [
//     {
//       name: "Persona de geração",
//       type: "pie",
//       radius: [50, 90],
//       center: ["50%", "50%"],
//       roseType: "area",
//       itemStyle: {
//         borderRadius: 8,
//       },
//       label: {
//         show: true,
//         formatter: "{d}%",
//       },
//       data: [
//         { value: 1355, name: "Veteranos" },
//         { value: 5644, name: "Baby Boomer" },
//         { value: 1234, name: "Gen X" },
//         { value: 4578, name: "Gen Y" },
//         { value: 5566, name: "Gen Z" },
//       ],
//     },
//   ],
// };

// const elGraficoPessoasPorGeracao = document.querySelector(
//   "#graficoPessoasPorGeracao",
// );
// if (elGraficoPessoasPorGeracao) {
//   let graficoPessoasPorGeracao = echarts.init(
//     elGraficoPessoasPorGeracao,
//     null,
//     {
//       height: 250,
//     },
//   );
//   graficoPessoasPorGeracao.setOption(optionPessoasPorGeracao);
// }
// colecaoConfiguracoesGraficosPJ.push(optionPessoasPorGeracao);
/* FIM PESSOAS POR GERAÇÃO */

/* PERSONA DE CRÉDITO */
// let optionPersonaCredito = {
//   label: {
//     show: true,
//     rotate: 90,
//     formatter: function (params) {
//       const percentual = `${
//         optionPersonaCreditoClone[params.componentIndex].data[0]
//       }`;
//       return `${percentual}%`;
//     },
//   },

//   tooltip: {
//     trigger: "item",
//     formatter: function (params) {
//       const valorTotal =
//         optionPersonaCreditoClone[params.componentIndex].valorAbsoluto;

//       return `<b>Quantidade</b>: ${formatarNumeroMilharesCentenas(
//         valorTotal,
//       )} `;
//     },
//   },
//   legend: {
//     orient: "horizontal",
//     left: "center",
//     top: 190,
//     itemGap: 10,

//     align: "left",
//   },
//   grid: {
//     top: "2%",
//     left: "2%",
//     right: "2%",
//     bottom: "25%",
//     containLabel: true,
//   },
//   xAxis: {
//     type: "value",
//     show: false,
//   },
//   yAxis: {
//     type: "category",
//     data: ["Quantidade"],
//     show: false,
//   },
//   series: [
//     {
//       name: "O Bem Amado",
//       type: "bar",
//       stack: "total",
//       label: {
//         show: true,
//       },
//       emphasis: {
//         focus: "series",
//       },
//       data: [9793],
//     },
//     {
//       name: "Sempre Presente",
//       type: "bar",
//       stack: "total",
//       label: {
//         show: true,
//       },
//       emphasis: {
//         focus: "series",
//       },
//       data: [2210],
//     },
//     {
//       name: "Pago Quanto Puder",
//       type: "bar",
//       stack: "total",
//       label: {
//         show: true,
//       },
//       emphasis: {
//         focus: "series",
//       },
//       data: [1535],
//     },
//     {
//       name: "Fujam de Mim",
//       type: "bar",
//       stack: "total",
//       label: {
//         show: true,
//       },
//       emphasis: {
//         focus: "series",
//       },
//       data: [910],
//     },
//     {
//       name: "Quem sou Eu",
//       type: "bar",
//       stack: "total",
//       label: {
//         show: true,
//       },
//       emphasis: {
//         focus: "series",
//       },
//       data: [1910],
//     },
//     {
//       name: "Novos Entrantes",
//       type: "bar",
//       stack: "total",
//       label: {
//         show: true,
//       },
//       emphasis: {
//         focus: "series",
//       },
//       data: [910],
//     },
//   ],
// };
// const elGraficoPersonaCredito = document.querySelector(
//   "#graficoPersonaCredito",
// );

// const somaPersonaCredito = optionPersonaCredito.series.reduce(
//   (acumulador, itemAtual) => {
//     return acumulador + itemAtual.data[0];
//   },
//   0,
// );

// const optionPersonaCreditoClone = optionPersonaCredito.series.map((item) => {
//   return {
//     ...item,
//     valorAbsoluto: item.data[0],
//     data: [`${((item.data[0] / somaPersonaCredito) * 100).toFixed(1)}`],
//   };
// });

// if (elGraficoPersonaCredito) {
//   let graficoPersonaCredito = echarts.init(elGraficoPersonaCredito, null, {
//     height: 250,
//   });
//   graficoPersonaCredito.series = optionPersonaCreditoClone;
//   graficoPersonaCredito.setOption(optionPersonaCredito);
// }
// colecaoConfiguracoesGraficosPJ.push(optionPersonaCredito);
/* FIM PERSONA DE CRÉDITO */

/* PERSONA DIGITAL */
// const optionPersonaDigital = {
//   tooltip: {
//     trigger: "item",
//     formatter: function (params) {
//       return `<b>Quantidade:</b> ${formatarNumeroMilharesCentenas(
//         params.value,
//       )}`;
//     },
//   },

//   series: [
//     {
//       name: "",
//       type: "funnel",
//       left: "center",
//       top: 10,
//       bottom: 10,
//       width: "80%",
//       min: 1789,
//       max: 17568,
//       minSize: "0%",
//       maxSize: "100%",
//       sort: "descending",
//       gap: 2,

//       label: {
//         show: true,
//         position: "inside",
//         formatter: function (params) {
//           return `${params.name}\n${params.percent.toFixed(1)}%`;
//         },
//         textStyle: {
//           textShadow: "none",
//           textShadowBlur: "none",
//           borderWidth: 0,
//         },
//       },
//       data: [
//         { value: 15544, name: "Digital--" },
//         { value: 11243, name: "Digital-" },
//         { value: 17568, name: "Digital+-" },
//         { value: 3568, name: "Digital+" },
//         { value: 5633, name: "Digital++" },
//       ],
//     },
//   ],
// };

// const elGraficoPessoaDigital = document.querySelector("#graficoPersonaDigital");
// if (elGraficoPessoaDigital) {
//   let graficoPersonaDigital = echarts.init(elGraficoPessoaDigital, null, {
//     height: 250,
//   });
//   graficoPersonaDigital.setOption(optionPersonaDigital);
// }
// colecaoConfiguracoesGraficosPJ.push(optionPersonaDigital);
/* FIM PERSONA DIGITAL */

/* POSSÍVEL ESCOLARIDADE */
// const optionPossivelEscolaridade = {
//   tooltip: {
//     trigger: "item",
//     formatter: function (params) {
//       const label = params.data.name;
//       const valor = params.data.value;
//       const percentual = (
//         (params.data.value / totalDadosEscolaridades) *
//         100
//       ).toFixed(1);

//       return `
//         <b>Ensino ${label}</b><br>
//         <b>Quantidade</b>: ${formatarNumeroMilharesCentenas(
//           valor,
//         )} (${percentual}%)
//       `;
//     },
//   },

//   grid: {
//     top: "2%",
//     left: "2%",
//     right: "2%",
//     bottom: "2%",
//     containLabel: true,
//   },
//   polar: {
//     radius: [30, "120%"], // Reduzi o raio para dar espaço para os rótulos
//     axisLine: {}, // Define as configurações da linha do eixo como vazias para remover as linhas
//     splitLine: {}, // Define as configurações das linhas de divisão como vazias para remover as linhas
//   },
//   angleAxis: {
//     max: 25000,
//     startAngle: 180,
//     show: false,
//   },
//   radiusAxis: {
//     type: "category",
//     data: [
//       "Fundamental",
//       "Médio",
//       "Técnico",
//       "Superior",
//       "Pós Graduação",
//       "Mestrado",
//     ],
//     axisLabel: {
//       show: true,
//       rotate: 270,
//       textStyle: {
//         fontSize: 10,
//       },
//     },
//   },

//   series: {
//     type: "bar",
//     data: [
//       { value: 1226, name: "Fundamental" },
//       { value: 5903, name: "Médio" },
//       { value: 11732, name: "Técnico" },
//       { value: 4157, name: "Superior" },
//       { value: 10, name: "Pós Graduação" },
//       { value: 5, name: "Mestrado" },
//     ],
//     coordinateSystem: "polar",
//     label: {
//       show: false,
//       position: "top",
//       formatter: "{b}: {c}",
//     },
//     // Defina uma paleta de cores para as colunas
//     itemStyle: {
//       color: function (params) {
//         let arrColors = [...eChartsGlobalConfig.color];
//         let colors = arrColors.slice(0, 6);
//         return colors[params.dataIndex];
//       },
//     },
//   },
// };

// const elGraficoPossivelEscolaridade = document.querySelector(
//   "#graficoPossivelEscolaridade",
// );

// const totalDadosEscolaridades = optionPossivelEscolaridade.series.data.reduce(
//   (acumulador, itemAtual) => {
//     return acumulador + itemAtual.value;
//   },
//   0,
// );
// if (elGraficoPossivelEscolaridade) {
//   let graficoPossivelEscolaridade = echarts.init(
//     elGraficoPossivelEscolaridade,
//     null,
//     {
//       height: 250,
//     },
//   );
//   graficoPossivelEscolaridade.setOption(optionPossivelEscolaridade);
// }

// colecaoConfiguracoesGraficosPJ.push(optionPossivelEscolaridade);
/* FIM POSSÍVEL ESCOLARIDADE */

/* PERSONA DEMOGRÁFICA */

// const optionPersonaDemografica = {
//   grid: {
//     top: "1%",
//     left: "1%",
//     right: "1%",
//     bottom: "1%",
//     width: "100%",
//   },

//   tooltip: {
//     trigger: "item",
//     formatter: function (params) {
//       return `<b>${params.data.name}</b><br>
//               <b>Quantidade:</b> ${formatarNumeroMilharesCentenas(
//                 params.data.value,
//               )}<br>
//               <b>Percentual:</b> ${(
//                 (params.data.value / totalPersonaDemografica) *
//                 100
//               ).toFixed(1)}%
//         `;
//     },
//   },

//   label: {
//     formatter: function (params) {
//       const label = params.data.name;
//       const valor = params.data.value;
//       const percentual = ((valor / totalPersonaDemografica) * 100).toFixed(1);
//       return `${label}:\n ${percentual}%`;
//     },
//   },
//   levels: {
//     show: false,
//   },

//   series: [
//     {
//       type: "treemap",
//       // roam: false,
//       breadcrumb: {
//         show: true,
//         emptyItemWidth: 0,
//       },
//       data: [
//         {
//           name: "Adulto vida modesta",
//           value: 36177318,
//         },
//         {
//           name: "Quero descansar",
//           value: 25479843,
//         },
//         {
//           name: "Jovem nem nem",
//           value: 23428368,
//         },
//         {
//           name: "Homem provedor",
//           value: 15987154,
//         },
//         {
//           name: "Mulher com foco no emprego",
//           value: 14006947,
//         },
//         {
//           name: "Jovem inicio de trabalho",
//           value: 13443300,
//         },
//         {
//           name: "Jovem aprendiz",
//           value: 12124606,
//         },
//         {
//           name: "Veterano sobrevivente",
//           value: 9892046,
//         },
//         {
//           name: "Veterana solitária",
//           value: 9774377,
//         },
//         {
//           name: "Adulto sem estudo",
//           value: 5915676,
//         },
//         {
//           name: "Veterano aposentado",
//           value: 4576035,
//         },
//         {
//           name: "Jovem bem encaminhado",
//           value: 4213474,
//         },
//         {
//           name: "Vida sofrida",
//           value: 4002105,
//         },
//         {
//           name: "Jovem-carreira-definida",
//           value: 3513170,
//         },
//         {
//           name: "Dependente social",
//           value: 3438332,
//         },
//         {
//           name: "Homem com foco no trabalho",
//           value: 3369746,
//         },
//         {
//           name: "Vida de aposentado",
//           value: 3265633,
//         },
//         {
//           name: "Homem com foco na estabilidade",
//           value: 3263025,
//         },
//         {
//           name: "Jovem carreira definida",
//           value: 3071811,
//         },
//         {
//           name: "Quero aproveitar a vida",
//           value: 2973879,
//         },
//         {
//           name: "Senhora dependente",
//           value: 2839292,
//         },
//         {
//           name: "Mulher com foco na família",
//           value: 2825548,
//         },
//         {
//           name: "Quero sossego",
//           value: 2535965,
//         },
//         {
//           name: "Mulher com foco na carreira",
//           value: 2469131,
//         },
//         {
//           name: "Vitoriosa",
//           value: 2238869,
//         },
//         {
//           name: "Vovozinho",
//           value: 1976772,
//         },
//         {
//           name: "Vovozinha",
//           value: 1452660,
//         },
//         {
//           name: "Aposentado por idade",
//           value: 1151298,
//         },
//         {
//           name: "Veterano aproveitando a vida",
//           value: 1031646,
//         },
//         {
//           name: "Serviços gerais",
//           value: 703363,
//         },
//         {
//           name: "Veterana aproveitando a vida",
//           value: 666014,
//         },
//         {
//           name: "Jovem esperança",
//           value: 652149,
//         },
//         {
//           name: "Adulto de sucesso",
//           value: 589541,
//         },
//         {
//           name: "Conquistador",
//           value: 587078,
//         },
//         {
//           name: "Subempregado",
//           value: 315693,
//         },
//         {
//           name: "Mulher de sucesso",
//           value: 298687,
//         },
//         {
//           name: "Dona do destino",
//           value: 275651,
//         },
//         {
//           name: "Jovem bombando",
//           value: 240376,
//         },
//         {
//           name: "Estudante boa vida",
//           value: 210667,
//         },
//         {
//           name: "Dona de casa",
//           value: 191224,
//         },
//         {
//           name: "Jovem influente",
//           value: 139776,
//         },
//         {
//           name: "Nem trabalha nem é aposentado",
//           value: 130689,
//         },
//         {
//           name: "Veterano poderoso",
//           value: 115002,
//         },
//         {
//           name: "Veterana culta",
//           value: 50499,
//         },
//         {
//           name: "Youtuber",
//           value: 3344,
//         },
//         {
//           name: "Blogueira",
//           value: 2437,
//         },
//       ],
//     },
//   ],
// };

// const elPersonaDemografica = document.querySelector(
//   "#graficoPersonaDemografica",
// );

// const totalPersonaDemografica = optionPersonaDemografica.series[0].data.reduce(
//   (acumulador, itemAtual) => {
//     return acumulador + itemAtual.value;
//   },
//   0,
// );

// if (elPersonaDemografica) {
//   let graficoPersonaDemografica = echarts.init(elPersonaDemografica, null, {
//     height: 250,
//   });
//   graficoPersonaDemografica.setOption(optionPersonaDemografica);
// }
// colecaoConfiguracoesGraficosPJ.push(optionPersonaDemografica);
/* FIM PERSONA DEMOGRÁFICA */

/* PROPENSÃO DE PAGAMENTO */
// const optionPropensaoPagamento = {
//   tooltip: {
//     trigger: "axis",
//     axisPointer: {
//       type: "cross",
//       label: {
//         show: false,
//       },
//     },
//     formatter: function (params) {
//       return `
//         <b>Quantidade:</b> ${formatarNumeroMilharesCentenas(
//           params[0].value,
//         )}<br>
//       `;
//     },
//   },

//   grid: {
//     top: "5%",
//     left: "1%",
//     right: "1%",
//     bottom: "1%",
//     containLabel: true,
//   },

//   label: {
//     show: true,
//     position: "inside",
//     formatter: function (params) {
//       const valor = params.value;
//       const percentual = ((valor / totalPropensaoPagamento) * 100).toFixed(2);
//       return `${percentual}%`;
//     },
//   },

//   axisPointer: {
//     label: {
//       show: false,
//     },
//   },

//   xAxis: [
//     {
//       type: "category",
//       axisTick: {
//         alignWithLabel: true,
//       },
//       data: ["Muito alta", "Alta", "Média", "Baixa", "Muito Baixa", "Zerada"],
//     },
//   ],
//   yAxis: [
//     {
//       show: true,
//       type: "value",
//       position: "right",
//       alignTicks: true,
//       axisLabel: {
//         show: false,
//       },
//       axisLine: {
//         show: true,
//       },
//     },
//   ],
//   series: [
//     {
//       name: "Quantidade",
//       type: "bar",
//       data: [
//         {
//           value: 5535,
//           itemStyle: {
//             color: "#00D59A",
//           },
//         },
//         {
//           value: 4525,
//           itemStyle: {
//             color: "#3A7DE8",
//           },
//         },
//         {
//           value: 3526,
//           itemStyle: {
//             color: "#93a1c1",
//           },
//         },
//         {
//           value: 15426,
//           itemStyle: {
//             color: "#FFAF26",
//           },
//         },
//         {
//           value: 1541,
//           itemStyle: {
//             color: "#FF6565",
//           },
//         },
//         {
//           value: 1542,
//           itemStyle: {
//             color: "#6456BB",
//           },
//         },
//       ],
//     },
//   ],
// };

// const elGraficoPropensaoPagamento = document.querySelector(
//   "#graficoPropensaoPagamento",
// );

// const totalPropensaoPagamento = optionPropensaoPagamento.series[0].data.reduce(
//   (acumulador, itemAtual) => {
//     return acumulador + itemAtual.value;
//   },
//   0,
// );

// if (elGraficoPropensaoPagamento) {
//   let graficoPropensaoPagamento = echarts.init(
//     elGraficoPropensaoPagamento,
//     null,
//     {
//       height: 250,
//     },
//   );
//   graficoPropensaoPagamento.setOption(optionPropensaoPagamento);
// }
// colecaoConfiguracoesGraficosPJ.push(optionPropensaoPagamento);
/* FIM PROPENSÃO DE PAGAMENTO */

/* COLLECTION STORE */
// const optionCollectionScore = {
//   legend: {
//     orient: "horizontal",
//     top: "top",
//     left: 0,
//     width: "600px",
//     itemGap: 4,
//   },
//   tooltip: {
//     trigger: "item",
//     formatter: function (params) {
//       return `<b>Quantidade</b>: ${formatarNumeroMilharesCentenas(
//         params.value,
//       )}`;
//     },
//   },

//   grid: {
//     top: "1%",
//     left: "1%",
//     right: "1%",
//     bottom: "1%",
//     containLabel: true,
//   },

//   series: [
//     {
//       name: "Persona de geração",
//       type: "pie",
//       radius: [50, 90],
//       center: ["50%", "50%"],
//       roseType: "area",
//       itemStyle: {
//         borderRadius: 8,
//       },
//       roseType: "area",

//       label: {
//         show: true,
//         formatter: "{d}%",
//       },
//       data: [
//         { value: 40, name: "Risco muito alto" },
//         { value: 38, name: "Risco alto" },
//         { value: 32, name: "Risco médio" },
//         { value: 30, name: "Risco baixo" },
//         { value: 28, name: "Risco muito baixo" },
//       ],
//     },
//   ],
// };

// const elGraficoCollectionScore = document.querySelector(
//   "#graficoCollectionScore",
// );
// if (elGraficoCollectionScore) {
//   let graficoCollectionScore = echarts.init(elGraficoCollectionScore, null, {
//     height: 275,
//   });

//   graficoCollectionScore.setOption(optionCollectionScore);
// }
// colecaoConfiguracoesGraficosPJ.push(optionCollectionScore);
/* FIM COLLECTION STORE */

/* VÍNCULO SOCIETÁRIO */
// const optionVinculoSocietario = {
//   tooltip: {
//     trigger: "item",
//     formatter: function (params) {
//       return `<b>Quantidade</b>: ${formatarNumeroMilharesCentenas(
//         params.data.value,
//       )}`;
//     },
//   },
//   label: {
//     show: true,
//     position: "inside",
//     formatter: function (params) {
//       return `${params.percent.toFixed(1)}%`;
//     },
//   },
//   legend: {
//     orient: "horizontal",
//     top: "top",
//   },
//   grid: {
//     top: "5%",
//     left: "5%",
//     right: "5%",
//     bottom: "5%",
//     containLabel: true,
//   },
//   series: [
//     {
//       type: "pie",
//       radius: "70%",
//       data: [
//         { value: 1048, name: "Grande" },
//         { value: 735, name: "Média" },
//         { value: 580, name: "Pequena" },
//         { value: 484, name: "Micro" },
//         { value: 384, name: "MEI" },
//       ],

//       emphasis: {
//         itemStyle: {
//           shadowBlur: 10,
//           shadowOffsetX: 0,
//           shadowColor: "rgba(0, 0, 0, 0.5)",
//         },
//       },
//     },
//   ],
// };

// const elGraficoVinculoSocietario = document.querySelector(
//   "#graficoVinculoSocietario",
// );
// if (elGraficoVinculoSocietario) {
//   let graficoVinculoSocietario = echarts.init(
//     elGraficoVinculoSocietario,
//     null,
//     {
//       height: 250,
//     },
//   );
//   graficoVinculoSocietario.setOption(optionVinculoSocietario);
// }
// colecaoConfiguracoesGraficosPJ.push(optionVinculoSocietario);
/* FIM VÍNCULO SOCIETÁRIO */

/* DISTRIBUIÇÃO DE RENDA */
// const optionDistribuicaoRenda = {
//   tooltip: {
//     trigger: "item",
//     formatter: `
//       <b>{a}</b>: {b}<br/>
//       <b>Nº total</b>: {c}<br/>
//       <b>Percentual</b>: {d}%
//     `,
//   },

//   grid: {
//     top: "1%",
//     left: "1%",
//     right: "1%",
//     bottom: "1%",
//     containLabel: true,
//   },

//   legend: {
//     data: ["Classe A", "Classe B", "Classe C", "Classe D", "Classe E"],
//   },

//   series: [
//     {
//       name: "Classe",
//       type: "pie",
//       selectedMode: "single",
//       radius: [0, "40%"],
//       center: ["50%", "55%"],
//       label: {
//         show: false,
//       },
//       labelLine: {
//         show: false,
//       },
//       data: [
//         { value: 1548, name: "Classe A" },
//         { value: 775, name: "Classe B" },
//         { value: 679, name: "Classe C" },
//         { value: 679, name: "Classe D" },
//         { value: 679, name: "Classe E" },
//       ],
//     },
//     {
//       name: "Renda",
//       type: "pie",
//       radius: ["50%", "55%"],
//       center: ["50%", "55%"],
//       labelLine: {
//         length: 30,
//       },
//       label: {
//         formatter: "{d}%",
//         backgroundColor: "#F6F8FC",
//         borderColor: "transparent",
//         borderWidth: 1,
//         borderRadius: 4,
//         rich: {
//           per: {
//             color: "#fff",
//             backgroundColor: "#4C5058",
//             padding: [3, 4],
//             borderRadius: 4,
//           },
//         },
//       },
//       data: [
//         { value: 1048, name: "De 1.000 a 2.000" },
//         { value: 335, name: "De 2.000 a 3.000" },
//         { value: 310, name: "De 3.000 a 5.000" },
//         { value: 251, name: "De 5.000 a 7.000" },
//         { value: 234, name: "De 7.000 a 10.000" },
//         { value: 147, name: "De 10.000 a 15.000" },
//         { value: 135, name: "De 15.000 a 20.000" },
//         { value: 102, name: "Acima de 20.000" },
//       ],
//     },
//   ],
// };

// const elGraficoDistribuicaoRenda = document.querySelector(
//   "#graficoDistribuicaoRenda",
// );

// if (elGraficoDistribuicaoRenda) {
//   let graficoDistribuicaoRenda = echarts.init(
//     elGraficoDistribuicaoRenda,
//     optionDistribuicaoRenda,
//     {
//       height: 250,
//     },
//   );
//   graficoDistribuicaoRenda.setOption(optionDistribuicaoRenda);
// }
// colecaoConfiguracoesGraficosPJ.push(optionDistribuicaoRenda);
/* FIM DISTRIBUIÇÃO DE RENDA */

/* CONSULTADOS EM 6 E 12 MESES */
// const optionConsultaUltimoAno = {
//   tooltip: {
//     trigger: "item",
//     formatter: function (params) {
//       return `<b>Quantidade:</b> ${formatarNumeroMilharesCentenas(
//         params.data.value,
//       )}`;
//     },
//   },
//   label: {
//     formatter: function (params) {
//       return `${(params.percent * 2).toFixed(1)}%`;
//     },
//   },
//   grid: {
//     top: "5%",
//     left: "5%",
//     right: "5%",
//     bottom: "5%",
//     containLabel: true,
//   },
//   legend: {
//     left: "40%",
//     top: "center",
//     selectedMode: false,
//     orient: "vertical",
//   },
//   series: [
//     {
//       name: "",
//       type: "pie",
//       radius: ["40%", "70%"],
//       center: ["50%", "50%"],
//       startAngle: 90,

//       data: [
//         { value: 1048, name: "6 meses" },
//         { value: 735, name: "12 Meses" },
//         {
//           value: 1048 + 735,
//           itemStyle: {
//             color: "none",
//             decal: {
//               symbol: "none",
//             },
//           },
//           label: {
//             show: false,
//           },
//         },
//       ],
//     },
//   ],
// };

// const elGraficoConsultasUltimoAno = document.querySelector(
//   "#graficoConsultasUltimoAno",
// );
// if (elGraficoConsultasUltimoAno) {
//   let graficoConsultasUltimoAno = echarts.init(
//     elGraficoConsultasUltimoAno,
//     null,
//     {
//       height: 250,
//     },
//   );
//   graficoConsultasUltimoAno.setOption(optionConsultaUltimoAno);
// }
// colecaoConfiguracoesGraficosPJ.push(optionConsultaUltimoAno);
/* FIM CONSULTADOS EM 6 E 12 MESES */

// setTimeout(function () {
//   animateCharts();
// }, 1000);

// function animateCharts() {
//   const waypoints = $(".chart-item").waypoint({
//     handler: function (direction) {
//       if (direction === "down") {
//         if (!this.element.classList.contains("animated")) {
//           const elementoIndex = $(".chart-item").index(this.element);
//           const chartElement = document.querySelector("#" + this.element.id);
//           console.log(chartElement);
//           const chartInstance = echarts.getInstanceByDom(chartElement);
//           chartInstance.clear();
//           chartInstance.setOption(
//             colecaoConfiguracoesGraficosPJ[elementoIndex],
//           );

//           this.element.classList.add("animated");
//         }
//       }
//     },
//   });
// }
