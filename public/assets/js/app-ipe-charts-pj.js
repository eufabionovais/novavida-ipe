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
    data: [""],
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

/* CAPITAL SOCIAL */
$(".tbl-chart")
  .find(".legend")
  .each(function (index, item) {
    $(item).css({
      backgroundColor: eChartsGlobalConfig.color[index],
    });
  });

/* FIM CAPITAL SOCIAL */

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
        formatter: function (params) {
          return `${params.percent.toFixed(1)}%`;
        },
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
        position: ["50%", -10],
        rotate: 90,
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
    data: [""],
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
    left: "60%",
    top: "center",
    selectedMode: false,
    orient: "vertical",
  },
  series: [
    {
      name: "",
      type: "pie",
      radius: ["40%", "70%"],
      center: ["30%", "50%"],
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

        // {
        //   value: 533 + 1657 + 103 + 165 + 530 + 151 + 735 + 805 + 1110,
        //   itemStyle: {
        //     color: "none",
        //     decal: {
        //       symbol: "none",
        //     },
        //   },
        //   label: {
        //     show: false,
        //   },
        // },
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
        position: ["50%", -10],
        rotate: 90,
        textShadowBlur: 0,
        borderWidth: 0,
        textStyle: labelTextConfigs,

        formatter: function (params) {
          return `${params.value}%`;
        },
      },
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

/* SELEÇÃO DE SEÇÃO */

const secoesCNAE = {
  "secao-a": [
    {
      value: 5,
      name: "Atividades de apoio à agricultura não especificadas anteriormente",
    },
    {
      value: 15,
      name: "Atividades de apoio à produção florestal",
    },
    {
      value: 22,
      name: "Atividades de pós-colheita",
    },
    {
      value: 64,
      name: "Criação de frangos para corte",
    },
    {
      value: 33,
      name: "Cultivo de eucalipto",
    },
    {
      value: 2,
      name: "Serviço de preparação de terreno, cultivo e colheita",
    },
  ],
  "secao-b": [
    {
      value: 63,
      name: "Atividades de apoio à extração de minerais não metálicos",
    },
    { value: 122, name: "Extração de ardósia e beneficiamento associado" },
    {
      value: 36,
      name: "Extração de areia, cascalho ou pedregulho e beneficiamento associado",
    },
    { value: 173, name: "Extração de granito e beneficiamento associado" },
    {
      value: 90,
      name: "Extração de outros minerais não metálicos não especificados anteriormente",
    },
    { value: 119, name: "Refino e outros tratamentos do sal" },
  ],
  "secao-c": [
    {
      value: 64,
      name: "Aparelhamento de placas e execução de trabalhos em mármore, granito, ardósia e outras pedras",
    },
    { value: 87, name: "Beneficiamento de arroz" },
    {
      value: 120,
      name: "Confecção de peças do vestuário, exceto roupas íntimas e as confeccionadas sob medida",
    },
    { value: 36, name: "Confecção de roupas íntimas" },
    {
      value: 111,
      name: "Confecção, sob medida, de peças do vestuário, exceto roupas íntimas",
    },
    {
      value: 68,
      name: "Fabricação de acessórios do vestuário, exceto para segurança e proteção",
    },
    { value: 165, name: "Fabricação de alimentos e pratos prontos" },
    {
      value: 55,
      name: "Fabricação de artefatos de cerâmica e barro cozido para uso na construção, exceto azulejos e pisos",
    },
    {
      value: 189,
      name: "Fabricação de artefatos diversos de madeira, exceto móveis",
    },
    { value: 50, name: "Fabricação de artefatos têxteis para uso doméstico" },
    {
      value: 105,
      name: "Fabricação de artigos de serralheria, exceto esquadrias",
    },
    {
      value: 57,
      name: "Fabricação de artigos para viagem, bolsas e semelhantes de qualquer material",
    },
    { value: 84, name: "Fabricação de bijuterias e artefatos semelhantes" },
    { value: 40, name: "Fabricação de calçados de couro" },
    {
      value: 39,
      name: "Fabricação de equipamentos e acessórios para segurança pessoal e profissional",
    },
    {
      value: 27,
      name: "Fabricação de especiarias, molhos, temperos e condimentos",
    },
    {
      value: 92,
      name: "Fabricação de esquadrias de madeira e de peças de madeira para instalações industriais e comerciais",
    },
    { value: 168, name: "Fabricação de esquadrias de metal" },
    { value: 41, name: "Fabricação de estruturas metálicas" },
    {
      value: 188,
      name: "Fabricação de estruturas pré-moldadas de concreto armado, em série e sob encomenda",
    },
    { value: 77, name: "Fabricação de laticínios" },
    {
      value: 146,
      name: "Fabricação de luminárias e outros equipamentos de iluminação",
    },
    {
      value: 58,
      name: "Fabricação de máquinas e equipamentos para as indústrias de alimentos, bebidas e fumo, peças e acessórios",
    },
    {
      value: 179,
      name: "Fabricação de máquinas e equipamentos para uso industrial específico não especificados anteriormente, peças e acessórios",
    },
    {
      value: 139,
      name: "Fabricação de máquinas-ferramenta, peças e acessórios",
    },
    { value: 148, name: "Fabricação de massas alimentícias" },
    {
      value: 66,
      name: "Fabricação de medicamentos alopáticos para uso humano",
    },
    {
      value: 183,
      name: "Fabricação de mesas de bilhar, de sinuca e acessórios associada à locação",
    },
    { value: 81, name: "Fabricação de móveis com predominância de madeira" },
    { value: 42, name: "Fabricação de obras de caldeiraria pesada" },
    {
      value: 70,
      name: "Fabricação de óleos vegetais em bruto, exceto óleo de milho",
    },
    {
      value: 125,
      name: "Fabricação de outras máquinas e equipamentos de uso geral não especificados anteriormente, peças e acessórios",
    },
    {
      value: 37,
      name: "Fabricação de outros artigos de carpintaria para construção",
    },
    {
      value: 78,
      name: "Fabricação de outros produtos de metal não especificados anteriormente",
    },
    {
      value: 190,
      name: "Fabricação de produtos de padaria e confeitaria com predominância de produção própria",
    },
    { value: 158, name: "Fabricação de produtos de panificação industrial" },
    {
      value: 108,
      name: "Fabricação de produtos de pastas celulósicas, papel, cartolina, papel-cartão e papelão ondulado não especificados anteriormente",
    },
    {
      value: 160,
      name: "Fabricação de produtos de trefilados de metal padronizados",
    },
    {
      value: 172,
      name: "Fabricação de produtos diversos não especificados anteriormente",
    },
    {
      value: 144,
      name: "Fabricação de sucos de frutas, hortaliças e legumes, exceto concentrados",
    },
    { value: 31, name: "Fabricação de tintas, vernizes, esmaltes e lacas" },
    {
      value: 165,
      name: "Fabricação de transformadores, indutores, conversores, sincronizadores e semelhantes, peças e acessórios",
    },
    { value: 27, name: "Facção de peças do vestuário, exceto roupas íntimas" },
    { value: 112, name: "Impressão de material para outros usos" },
    { value: 37, name: "Impressão de material para uso publicitário" },
    {
      value: 109,
      name: "Manutenção e reparação de máquinas e aparelhos de refrigeração e ventilação para uso industrial e comercial",
    },
    {
      value: 125,
      name: "Metalurgia de outros metais não ferrosos e suas ligas não especificados anteriormente",
    },
    {
      value: 140,
      name: "Outros serviços de acabamento em fios, tecidos, artefatos têxteis e peças do vestuário",
    },
    { value: 88, name: "Preparação de subprodutos do abate" },
    { value: 42, name: "Reforma de pneumáticos usados" },
    { value: 115, name: "Serrarias com desdobramento de madeira em bruto" },
    {
      value: 53,
      name: "Serviços de acabamentos gráficos, exceto encadernação e plastificação",
    },
    { value: 66, name: "Serviços de encadernação e plastificação" },
    { value: 127, name: "Serviços de montagem de móveis de qualquer material" },
    { value: 60, name: "Serviços de usinagem, torneiria e solda" },
  ],
};

/* FIM SELEÇÃO DE SEÇÃO */

/* EMPRESAS POR CNAE */
let configuracoesEmpresasPorCnae = {
  tooltip: {
    trigger: "item",
    formatter: function (params) {
      return `
        <b>Categoria:</b> ${params.name}<br>
        <b>Quantidade</b>: ${formatarNumeroMilharesCentenas(
          params.data.valorAbsoluto,
        )}<br>
        <b>Percentual:</b> ${params.value}%
        
        `;
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
        position: ["50%", -10],
        rotate: 90,
        textShadowBlur: 0,
        borderWidth: 0,
        textStyle: labelTextConfigs,

        formatter: function (params) {
          return `${params.value}%`;
        },
      },
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

const totalEmpresasPorCnae = configuracoesEmpresasPorCnae.series[0].data.reduce(
  (acumulador, itemAtual) => {
    return acumulador + itemAtual.value;
  },
  0,
);

const configuracoesEmpresasPorCnaeClone =
  configuracoesEmpresasPorCnae.series[0].data.map((item) => {
    return {
      ...item,
      value: `${((item.value / totalEmpresasPorCnae) * 100).toFixed(1)}`,
      valorAbsoluto: item.value,
    };
  });

const elEmpresasPorCnae = document.querySelector("#graficoEmpresasPorCnae");

if (elEmpresasPorCnae) {
  let graficoEmpresasPorCnae = echarts.init(elEmpresasPorCnae, null, {
    height: 250,
  });
  configuracoesEmpresasPorCnae.series[0].data =
    configuracoesEmpresasPorCnaeClone;
  graficoEmpresasPorCnae.setOption(configuracoesEmpresasPorCnae);
}
colecaoConfiguracoesGraficosPJ.push(configuracoesEmpresasPorCnae);

$("#selecionarSecao").on("change", function () {
  const value = $(this).val();

  let secao = null;

  if (value === "todos") {
    secao = [];
    for (let item in secoesCNAE) {
      secao.push(...secoesCNAE[item]);
    }
  } else {
    secao = secoesCNAE[value];
  }

  const labelSecoes = secao.map((item) => {
    return item.name;
  });

  const totalPorCnae = secao.reduce((acumulador, itemAtual) => {
    return acumulador + itemAtual.value;
  }, 0);

  const valores = secao.map((item, index) => {
    return {
      ...item,
      value: `${((item.value / totalPorCnae) * 100).toFixed(1)}`,
      valorAbsoluto: item.value,
      itemStyle: {
        color: getChartColors(index),
      },
    };
  });

  configuracoesEmpresasPorCnae.xAxis[0].data = labelSecoes;
  configuracoesEmpresasPorCnae.series[0].data = valores;

  const chartInstance = echarts.getInstanceByDom(
    document.querySelector("#graficoEmpresasPorCnae"),
  );

  chartInstance.clear();
  chartInstance.setOption(configuracoesEmpresasPorCnae);
});

$("#selecionarSecao").trigger("change");

function getChartColors(index) {
  const color =
    eChartsGlobalConfig.color[index % eChartsGlobalConfig.color.length];
  return color;
}

/* FIM EMPRESAS POR CNAE */

/* SAÚDE TRIBUTÁRIA PESSOAS JURÍDICA */
const configuracoesSaudeTributariaPJ = {
  legend: {
    orient: "horizontal",
    top: "top",
    left: "center",
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
      name: "",
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
        { value: 40, name: "De 1  a 2 Dívidas" },
        { value: 38, name: "De 2 a 3 Dívidas" },
        { value: 32, name: "De 4 a 5 Dívidas" },
        { value: 30, name: "Acima de 6 Dívidas" },
      ],
    },
  ],
};

const elSaudeTributariaPj = document.querySelector("#graficoSaudeTributariaPj");
if (elSaudeTributariaPj) {
  let graficoSaudeTributariaPj = echarts.init(elSaudeTributariaPj, null, {
    height: 275,
  });

  graficoSaudeTributariaPj.setOption(configuracoesSaudeTributariaPJ);
}
colecaoConfiguracoesGraficosPJ.push(configuracoesSaudeTributariaPJ);
/* FIM SAÚDE TRIBUTÁRIA PESSOAS JURÍDICA */

/* EMPRESAS POR FATURAMENTO */
const configuracoesEmpresasPorFaturamento = {
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
    bottom: "20%",
    containLabel: true,
  },

  label: {
    show: true,
    position: "inside",
    offset: [0, -15],
    formatter: function (params) {
      const valor = params.value;
      const percentual = ((valor / totalEmpresasPorFaturamento) * 100).toFixed(
        1,
      );
      return `${percentual}%`;
    },
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

  axisPointer: {
    label: {
      show: false,
      position: ["center", "-30px"],
    },
  },

  xAxis: [
    {
      type: "category",
      axisTick: {
        alignWithLabel: true,
      },
      data: [
        "De 0 a 1 mm",
        "De 1 a 5 mm",
        "De 5 a 10 mm",
        "De 10 a 25 mm",
        "De 25 a 50 mm",
        "De 50 a 100 mm",
        "De 100 a 250 mm",
        "De 250 a 500 mm",
        "De 500 a 750 mm",
        "De 750 mm a 1 bn",
        "Acima de 1 bn",
      ],
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
      name: "",
      type: "bar",
      data: [
        { value: 1544531, itemStyle: { color: "#00D59A" } },
        { value: 1454522, itemStyle: { color: "#3A7DE8" } },
        { value: 657791, itemStyle: { color: "#93a1c1" } },
        { value: 132891, itemStyle: { color: "#FFAF26" } },
        { value: 64433, itemStyle: { color: "#FF6565" } },
        { value: 51946, itemStyle: { color: "#6456BB" } },
        { value: 51876, itemStyle: { color: "#68C7AC" } },
        { value: 56220, itemStyle: { color: "#71A5D5" } },
        { value: 4765, itemStyle: { color: "#e2db46" } },
        { value: 1977, itemStyle: { color: "#FFC27D" } },
        { value: 4784, itemStyle: { color: "#FF8E8E" } },
      ],
    },
  ],
};

const elEmpresaPorFaturamento = document.querySelector(
  "#graficoEmpresaPorFaturamento",
);

const totalEmpresasPorFaturamento =
  configuracoesEmpresasPorFaturamento.series[0].data.reduce(
    (acumulador, itemAtual) => {
      return acumulador + itemAtual.value;
    },
    0,
  );

if (elEmpresaPorFaturamento) {
  let graficoEmpresaPorFaturamento = echarts.init(
    elEmpresaPorFaturamento,
    null,
    {
      height: 250,
    },
  );
  graficoEmpresaPorFaturamento.setOption(configuracoesEmpresasPorFaturamento);
}
colecaoConfiguracoesGraficosPJ.push(configuracoesEmpresasPorFaturamento);
/* FIM EMPRESAS POR FATURAMENTO */

/* QUANTIDADE DE FUNCIONÁRIOS */
const configuracoesQuantidadeFuncionarios = {
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
    bottom: "20%",
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

  label: {
    show: true,
    position: "inside",
    offset: [0, -15],
    formatter: function (params) {
      const valor = params.value;
      const percentual = ((valor / totalQuantidadeFuncionarios) * 100).toFixed(
        1,
      );
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
      data: [
        "Sem registro",
        "De 1 a 50",
        "De 51 a 100",
        "De 101 a 250",
        "De 251 a 500",
        "De 501 a 1000",
        "Acima de 1001",
      ],
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
          value: 1542,
          itemStyle: {
            color: "#6456BB",
          },
        },
        {
          value: 4458,
          itemStyle: {
            color: "#93a1c1",
          },
        },
      ],
    },
  ],
};

const elQuantidadeFuncionarios = document.querySelector(
  "#graficoQuantidadeFuncionarios",
);

const totalQuantidadeFuncionarios =
  configuracoesQuantidadeFuncionarios.series[0].data.reduce(
    (acumulador, itemAtual) => {
      return acumulador + itemAtual.value;
    },
    0,
  );

if (elQuantidadeFuncionarios) {
  let graficoQuantidadeFuncionarios = echarts.init(
    elQuantidadeFuncionarios,
    null,
    {
      height: 250,
    },
  );
  graficoQuantidadeFuncionarios.setOption(configuracoesQuantidadeFuncionarios);
}
colecaoConfiguracoesGraficosPJ.push(configuracoesQuantidadeFuncionarios);
/* FIM QUANTIDADE DE FUNCIONÁRIOS */

/* COLLECTION STORE PESSOAS JURÍDICA */
const configuracaoCollectionScorePJ = {
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
      name: "",
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

const elCollectionScorePj = document.querySelector("#graficoCollectionScorePj");
if (elCollectionScorePj) {
  let graficoCollectionScorePj = echarts.init(elCollectionScorePj, null, {
    height: 275,
  });

  graficoCollectionScorePj.setOption(configuracaoCollectionScorePJ);
}
colecaoConfiguracoesGraficosPJ.push(configuracaoCollectionScorePJ);
/* FIM COLLECTION STORE PESSOAS JURÍDICA */
