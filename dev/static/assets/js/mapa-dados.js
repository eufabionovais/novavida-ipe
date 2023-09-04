function formatPercentageCalculation(val, options) {

  const dataNumbers = options.config.series[0].data;
  const total = dataNumbers.reduce((acumulator, currentValue) => {
    return acumulator + currentValue;
  }, 0);

  let formattedNumber = (val / total) * 100;
  return `${formattedNumber.toFixed(2)}%`;
}

function formatSimplePercentage(value) {
  return `${value.toFixed(2)}%`;
}

Apex = {
  colors: [
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
  chart: {
    height: 400,
    fontFamily: "Work Sans",
    toolbar: {
      show: false,
    },
  },
  title: {
    style: {
      fontSize: "20px",
      fontFamily: "Work Sans",
      fontWeight: "normal",
      color: "#6B5FC6",
    },
  },
  dataLabels: {
    distributed: true,
    textAnchor: "start",
    style: {
      fontSize: "12px",
      fontFamily: "Work Sans",
      fontWeight: "bold",
      colors: ["#000"],
    },
    
    formatter: function (value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    dropShadow: {
      enabled: false,
    },
  },

  tooltip: {
    x: {
      formatter: function (value) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      },
    },
    y: {
      formatter: function (value) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      },
    },
  },

  fill: {
    opacity: 1,
  },
  stroke: {
    show: false,
  },
  legend: {
    show: false,
    position: "bottom",
    horizontalAlign: "center",
  },
};

/** SITUAÇÃO CADASTRAL PJ **/
var optionsSituacaoCadastralPj = {
  title: {
    text: "Situação cadastral",
  },
  chart: {
    type: "bar",
    stacked: true,
  },
  series: [
    {
      name: "Ativa",
      data: [23037396],
    },
    {
      name: "Inativa",
      data: [23851482],
    },
    {
      name: "Inapta",
      data: [7162590],
    },
    {
      name: "Outros",
      data: [2102187],
    },
  ],

  plotOptions: {
    bar: {
      horizontal: true,
      dataLabels: {
        orientation: "vertical",
      },
    },
  },

  legend: {
    show: true
  },

  grid: {
    show: false,
  },
  xaxis: {
    labels: {
      show: false,
    },    
  },
  yaxis: {
    labels: {
      show: false,
    },
    
  },
};

const elSituacaoCadastralPJ = document.querySelector("#graficoSituacaoCadastralPJ")
var graficoSituacaoCadastralPJ = new ApexCharts(
  elSituacaoCadastralPJ,
  optionsSituacaoCadastralPj
);

if(elSituacaoCadastralPJ) {
  graficoSituacaoCadastralPJ.render();
}
/** SITUAÇÃO CADASTRAL PJ **/

/** EMPRESAS POR PORTE **/
var optionsPorteEmpresas = {
  title: {
    text: "Porte",
  },
  chart: {
    type: "area",
  },
  series: [
    {
      name: "Total",
      data: [300549, 2725539, 2578992, 11823311, 14152148, 66997],
    },
  ],
  tooltip: {
    y: {
      formatter: function (value) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      },
    },
  },
  dataLabels: {
    textAnchor: "middle",
    offsetX: 5,
    offsetY: -10,
  },

  labels: ["Grande", "Média", "Pequena", "Micro", "MEI", "Outros"],
  yaxis: {
    labels: {
      show: false,
    },
  },
};

const elPorteEmpresas = document.querySelector("#graficoPorteEmpresas");
var graficoPorteEmpresas = new ApexCharts(
  elPorteEmpresas,
  optionsPorteEmpresas
);

if(elPorteEmpresas) {
  graficoPorteEmpresas.render();
}
/** EMPRESAS POR PORTE **/

/* EMPRESAS POR REGIÃO */
var optionsEmpresasPorRegiao = {
  title: {
    text: "Empresas por região",
  },
  chart: {
    width: "100%",
    type: "pie",
  },
  series: [17, 9, 17, 5, 52],
  labels: ["Sul", "Centro-oeste", "Nordeste", "Norte", "Sudeste"],
  dataLabels: {
    formatter: formatSimplePercentage
  },
  legend: {
    show: true
  }
};

const elEmpresasRegiao = document.querySelector("#graficoEmpresasPorRegiao");
var graficoEmpresasPorRegiao = new ApexCharts(
  elEmpresasRegiao,
  optionsEmpresasPorRegiao
);
if(elEmpresasRegiao) {
  graficoEmpresasPorRegiao.render();
}
/* EMPRESAS POR REGIÃO */


/* EMPRESAS POR UF */
var optionsEmpresasPorUF = {
  title: {
    text: "Empresas por UF",
  },
  chart: {
    type: "bar",
    stacked: true,
  },
  series: [
    {
      name: "",
      data: [
        66694, 255818, 69927, 323098, 1391821, 813096, 663109, 616954, 1021247,
        398108, 498483, 372032, 2862477, 567916, 357623, 1930706, 850702,
        244090, 2798339, 324338, 1836761, 186781, 55030, 1292035, 8852699,
        165522, 176372,
      ],
    },
  ],
  plotOptions: {
    bar: {
      distributed: true,
      dataLabels: {
        orientation: "vertical",
        position: "end",
        total: {
          enabled: false,
        },
        style: {
          fontSize: "12px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: "bold",
          colors: "#000",
        },
      },
    },
  },
  xaxis: {
    show: false,
    labels: {
      rotate: -45,
    },

    categories: [
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
  },

  legend: {
    show: false,
  },

  dataLabels: {
    formatter: formatPercentageCalculation
  },

  yaxis: {
    labels: {
      show: false,
    },
  },

};

const elEmpresasPorUF = document.querySelector("#graficoEmpresasPorUF");

var graficoEmpresasPorUF = new ApexCharts(
  elEmpresasPorUF,
  optionsEmpresasPorUF
);
if(elEmpresasPorUF) {
  graficoEmpresasPorUF.render();
}
/* EMPRESAS POR UF */

/* EMPRESAS POR TEMPO DE ATIVIDADE */
var optionsTempoAtividadeEmpresas = {
  title: {
    text: "Tempo de atividade da empresa",
  },
  chart: {
    type: "bar",
  },
  plotOptions: {
    bar: {
      horizontal: true,
      distributed: true,
    },
  },
  series: [
    {
      name: "",
      data: [6620463, 9152122, 6010771, 3552323, 6334991],
    },
  ],

  dataLabels: {
    formatter: formatPercentageCalculation,
  },

  yaxis: {
    labels: {
      show: true,
    },
  },
  xaxis: {
    categories: [
      "De 0 a 1 ano",
      "De 1 a 5 anos",
      "De 5 a 10 anos",
      "De 10 a 15 anos",
      "Mais de 10 anos",
    ],
    labels: {
      show: false,
    },
  },
};

const elTempoAtividadeEmpresas = document.querySelector("#graficoTempoAtividadeEmpresas")
var graficoTempoAtividadeEmpresas = new ApexCharts(
  elTempoAtividadeEmpresas,
  optionsTempoAtividadeEmpresas
);
if(elTempoAtividadeEmpresas) {
  graficoTempoAtividadeEmpresas.render();
}
/* EMPRESAS POR TEMPO DE ATIVIDADE */

/* EMPRESAS POR NATUREZA JURÍDICA */
var optionsEmpresasPorNaturezaJuridica = {
  title: {
    text: "Empresas por natureza jurídica",
  },
  series: [
    {
      name: "",
      data: [80266, 29306971, 1560023, 716266, 58],
    },
  ],
  chart: {
    type: "bar",
    height: 350,
  },
  dataLabels: {
    formatter: formatPercentageCalculation,
    offsetY: 20,
    textAnchor: "start",
  },
  plotOptions: {
     bar: {
      horizontal: false,
      distributed: true,
      dataLabels: {
        orientation: "vertical",

        textAnchor: "start",
      },
    },
  },

  yaxis: {
    labels: {
      show: false,
    },

  },

  xaxis: {
    categories: [
      ["Administração", "Pública"],
      ["Entidades", "Empresariais"],
      ["Entidades sem", "Fins Lucrativos"],
      "Pessoas físicas",
      [
        "Organizações",
        "Internacionais",
        "e Outras Instituições",
        "Extraterritoriais",
      ],
    ],
    labels: {
      show: true,
    },
  },

};

const elEmpresaNaturezaJuridica = document.querySelector("#graficoEmpresaPorNaturezaJuridica");
var graficoEmpresaPorNaturezaJuridica = new ApexCharts(
  elEmpresaNaturezaJuridica,
  optionsEmpresasPorNaturezaJuridica
);

if(elEmpresaNaturezaJuridica) {
  graficoEmpresaPorNaturezaJuridica.render();
}

/* EMPRESAS POR NATUREZA JURÍDICA */


/** EMPRESAS POR CAPITAL SOCIAL  */
var optionsEmpresaCapitalSocial = {
  title: {
    text: "Empresas por capital social",
  },
  chart: {
    type: "bar",
  },
  plotOptions: {
    bar: {
      horizontal: true,
      distributed: true,
    },
  },
  series: [
    {
      name: "",
      data: [641611, 114239, 102310, 390548, 972894, 1954470, 27501464],
    },
  ],
  dataLabels: {
    offsetX: 30,
    formatter: formatPercentageCalculation
  },

  xaxis: {
    categories: [
      "Acima de 1 milhão",
      "De 750 mil a 1 milhão",
      "De 500 a 750 mil",
      "De 250 a 500 mil",
      "De 100 a 250 mil",
      "De 50 a 100 mil",
      "De 0 a 50 mil",
    ],
    labels: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: true,
    },
  },
};

const elEmpresaCapitalSocial = document.querySelector("#graficoEmpresaCapitalSocial")
var graficoEmpresaCapitalSocial = new ApexCharts(
  elEmpresaCapitalSocial,
  optionsEmpresaCapitalSocial
);
if(elEmpresaCapitalSocial) {
  graficoEmpresaCapitalSocial.render();
}
/** EMPRESAS POR CAPITAL SOCIAL  */

/**EMPRESA POR QUANTIDADE DE FUNCIONÁRIOS */
var optionsQuantidadeFuncionarios = {
  title: {
    text: "Quantidade de funcionários",
  },
  series: [
    {
      name: "",
      data: [14658821, 16938127, 40071, 25076, 8531, 4100, 2810],
    },
  ],
  chart: {
    type: "bar",
      stacked: true,
  },

  dataLabels: {
    formatter: formatPercentageCalculation,
    offsetY: 20,
    textAnchor: "end",
    rotate: -90,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      barWidth: "50%",
      distributed: true,
      dataLabels: {
        orientation: "vertical",
        total: {
          enabled: false,
        },
      },
    },
  },
  xaxis: {
    labels: {
        show: true,
    },

    categories: [
      "Sem registro",
      "De 1 a 50",
      "De 51 a 100",
      "De 101 a 250",
      "De 251 a 500",
      "De 501 a 1000",
      "Acima de 1000",
    ],
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
};

const elQuantidadeFuncionarios = document.querySelector("#graficoQuantidadeFuncionarios");
var graficoQuantidadeFuncionarios = new ApexCharts(
  elQuantidadeFuncionarios,
  optionsQuantidadeFuncionarios
);
if(elQuantidadeFuncionarios) {
  graficoQuantidadeFuncionarios.render();
}
/**EMPRESA POR QUANTIDADE DE FUNCIONÁRIOS */

/** EMPRESAS POR QUANTIDADE DE PROPRIETÁRIOS */
var optionsQuantidadeFuncionarios = {
  title: {
    text: "Quantidade de proprietários",
  },
  chart: {
    type: "bar",
  },
  series: [
    {
      name: "",
      data: [1.05, 0.49, 1.08, 2.7, 15.96, 78.72],
    },
  ],
  plotOptions: {
    bar: {
      horizontal: true,
      distributed: true,
    },
  },
  dataLabels: {
    formatter: formatSimplePercentage,
    offsetX: 0,
    textAnchor: "start",
  },
  xaxis: {
    categories: [
      "+ de 5 proprietários",
      "5 proprietários",
      "4 proprietários",
      "5 proprietários",
      "2 proprietários",
      "1 proprietário",
    ],
    labels: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  yaxis: {
    labels: {
      show: true,
    },
  },
};

const elQuantidadeProprietarios = document.querySelector("#graficoQuantidadeProprietarios");
var graficoQuantidadeProprietarios = new ApexCharts(
  elQuantidadeProprietarios,
  optionsQuantidadeFuncionarios
);
if(elQuantidadeProprietarios) {
  graficoQuantidadeProprietarios.render();
}

/** EMPRESAS POR QUANTIDADE DE PROPRIETÁRIOS */

/**************************************/
/*
 SCORE POR FAIXA */
var optionsScorePorFaixa = {
  title: {
    text: "Score por faixa",
  },
  chart: {
    type: "bar",
  },
  series: [
    {
      name: "",
      data: [7035529, 5693384, 5179167, 4879392, 8770107],
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      distributed: true,
      dataLabels: {
        orientation: "vertical",
      },
    },
  },

  legend: {
    show: false,
  },
  xaxis: {
    categories: [
      "Risco muito alto",
      "Risco alto",
      "Risco médio",
      "Risco baixo",
      "Risco muito baixo",
    ],
  },
  yaxis: {
    show: false,
  },

  dataLabels: {
    formatter: formatPercentageCalculation,
  },

};

const elGraficoPorFaixa = document.querySelector("#graficoScorePorFaixa");
var graficoScorePorFaixa = new ApexCharts(
  elGraficoPorFaixa,
  optionsScorePorFaixa
);

if(elGraficoPorFaixa) {
  graficoScorePorFaixa.render();
}
/**************************************/

/*******************************/
/*
 SAÚDE TRIBUTÁRIA */
var optionsSaudeTributaria = {
  title: {
    text: "Saúde tributária",
  },
  chart: {
    width: 300,
    type: "pie",
  },
  series: [78, 18, 5],

  dataLabels: {
    formatter: formatSimplePercentage
  },

  labels: ["De 1 a 2 dívidas", "De 3 a 4 dívidas", "Acima de 4 dívidas"],

  legend: {
    show: true
  },
};


const elSaudeTributaria = document.querySelector("#graficoSaudeTributaria");
var graficoSaudeTributaria = new ApexCharts(
  elSaudeTributaria,
  optionsSaudeTributaria
);

if(elSaudeTributaria) {
  graficoSaudeTributaria.render();
}

/**************************************/
/*
 EMPRESAS POR FATURAMENTO */
var optionsEmpresasPorFaturamento = {
  title: {
    text: "Empresas por faturamento",
  },
  chart: {
    type: "bar",
  },
  plotOptions: {
    bar: {
      horizontal: false,
      distributed: true,
      dataLabels: {
        orientation: "vertical",
      },
    },
  },
  series: [
    {
      name: "",
      data: [
        28711441, 1872415, 657791, 132891, 64433, 51946, 51876, 56220, 4765,
        1977, 4784,
      ],
    },
  ],
  dataLabels: {
    offsetY: 40,
    textAnchor: "start",
    formatter: formatPercentageCalculation
  },

  xaxis: {
    categories: [
      "De 0 a 1MM",
      "De 1 a 5MM",
      "De 5 a 10MM",
      "De 10 a 25MM",
      "De 25 a 50MM",
      "De 50 a 100MM",
      "De 100 a 250MM",
      "De 250 a 500MM",
      "De 500 a 750MM",
      "De 750 a 1Bn",
      "Acima de 1Bn",
    ],
    labels: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
};

const elEmpresasPorFaturamento = document.querySelector("#graficoEmpresasPorFaturamento")
var graficoEmpresasPorFaturamento = new ApexCharts(
  elEmpresasPorFaturamento,
  optionsEmpresasPorFaturamento
);
if(elEmpresasPorFaturamento) {
  graficoEmpresasPorFaturamento.render();
}

/*****************************/
/*PERSONAS DA EMPRESA */

var optionsPersonasDaEmpresa = {
  title: {
    text: "Personas da empresa",
  },
  chart: {
    type: "bar",
  },
  plotOptions: {
    bar: {
      horizontal: true,
      distributed: true,
      dataLabels: {
        style: {
          colors: ["#333"],
        },
        offsetX: 30,
      },
    },
  },
  series: [
    {
      data: [
        70594, 1300002, 657594, 104724, 998295, 891960, 1873377, 322739,
        10243251,
      ],
    },
  ],
  dataLabels: {
    formatter: formatPercentageCalculation,
    offsetX: 30,
  },
  xaxis: {
    categories: [
      "Médias/Grandes novo",
      "Médias/Grandes estável",
      "Médias/Grandes em formação",
      "EPP Novo",
      "EPP Estável",
      "EPP em formação",
      "Empreendedor novo",
      "Empreendedor estável",
      "Empreendedor em formação",
    ],
    labels: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
};

const elPersonasEmpresas = document.querySelector("#graficoPersonasDaEmpresa");
var graficoPersonasDaEmpresa = new ApexCharts(
  elPersonasEmpresas,
  optionsPersonasDaEmpresa
);
if(elPersonasEmpresas) {
  graficoPersonasDaEmpresa.render();
}

/*******************************/
/*
 REPRESENTATIVIDADE DEALERS */
var optionsDealers = {
  title: {
    text: "Representatividade dos dealers",
  },
  chart: {
    width: 380,
    type: "pie",
  },
  series: [14, 7, 79],
  labels: ["Big dealers", "Good dealers", "Master dealers"],
  legend: {
    position: "bottom",
  },
  dataLabels: {
    formatter: formatSimplePercentage,
  },
};

const elGraficoDealers = document.querySelector("#graficoDealers");
var graficoDealers = new ApexCharts(
  elGraficoDealers,
  optionsDealers
);
if(elGraficoDealers) {
  graficoDealers.render();
}

/*****************************/
/* POTENCIAL E PROPENSÃO */

var optionPotencialPropensao = {
  title: {
    text: "Potencial e propensão",
  },
  chart: {
    type: "bar",
  },
  plotOptions: {
    bar: {
      horizontal: true,
      distributed: true,
    },
  },
  series: [
    {
      name: '',
      data: [5338332, 10600853, 3423627],
    },
  ],
  dataLabels: {
    formatter: formatPercentageCalculation
  },
  colors: ["#FFAF26", "#00D59A", "#FF6565"],
  yaxis: {
    labels: {
      show: false,
    },
  },
  xaxis: {
    categories: ["Amarelo", "Verde", "Vermelho"],
    labels: {
      show: false,
    },
  },
};

const elGraficoPropensao = document.querySelector("#graficoPotencialPropensao");
var graficoPotencialPropensao = new ApexCharts(
  elGraficoPropensao,
  optionPotencialPropensao
);
if(elGraficoPropensao) {
  graficoPotencialPropensao.render();
}

/**************************************/
/* EMPRESAS POR mcc */
optionsEmpresasPorMCC = {
  title: {
    text: "Empresas por MCC",
  },
  chart: {
    type: "bar",
  },
  plotOptions: {
    bar: {
      horizontal: false,
      distributed: true,
      dataLabels: {
        orientation: "vertical",
      },
    },
  },
  series: [
    {
      name: "",
      data: [
        2033801, 1811981, 1413917, 1263332, 1259543, 761300, 1012749, 558383,
        718219, 757453, 755000, 1024922, 435150, 389482, 374453, 678738, 438205,
        355360, 281416, 537513, 637306, 293064, 351800, 123705, 276814, 313873,
        136112, 130200, 48394, 61417, 78985, 62034, 3119, 2072,
      ],
    },
  ],
  dataLabels: {
    formatter: formatPercentageCalculation,
    offsetY: 50,
    textAnchor: "end",
  },

  xaxis: {
    categories: [
      "Varejo",
      "Serviços em geral",
      "Serviços de construção",
      "Direto do fabricante",
      "Restaurante",
      "Supermercado",
      "Outros",
      "Casa",
      "Educação",
      "Transporte de carga",
      "Veículos",
      "Beleza",
      "Oficinas de manutenção",
      "Farmácias",
      "Materiais de varrução",
      "Agroduto",
      "Cultura",
      "Informática",
      "Artigos evarrônicos",
      "Telemarketing",
      "Serviço médico hospitalar",
      "Atacadista",
      "Utilidade pública",
      "Locação",
      "Transporte de passageiro",
      "Serviços financeiros",
      "Petshop",
      "Móveis",
      "Lojas de departamento",
      "Postos de gasolina",
      "Turismo",
      "Hotéis",
      "Joalheria",
      "Linhas aéreas",
    ],
    labels: {
      rotate: -45,
    },
  },
  yaxis: {
    show: false,
    logarithmic: false,
  },

};

const elGraficoEmpresaMCC = document.querySelector("#graficoEmpresaPorMcc");
var graficoEmpresaPorMcc = new ApexCharts(
  elGraficoEmpresaMCC,
  optionsEmpresasPorMCC
);
if(elGraficoEmpresaMCC) {
  graficoEmpresaPorMcc.render();
}
/** EMPRESA POR MCC */


/* SITUAÇÃO DOCUMENTO PF */
var optionsSituacaoDocumentosPF = {
  title: {
    text: "Situação do documento",
  },
  chart: {
    type: "bar",
    stacked: true,
  },
  series: [
    {
      name: "Regular",
      data: [191876439],
    },
    {
      name: "Suspenso",
      data: [22345800],
    },
    {
      name: "Outros",
      data: [19096268],
    }
  ],

  plotOptions: {
    bar: {
      horizontal: true,
      dataLabels: {
        orientation: "vertical",
      },
    },
  },

  legend: {
    show: true
  },

  grid: {
    show: false,
  },
  xaxis: {
    labels: {
      show: false,
    },    
  },
  yaxis: {
    labels: {
      show: false,
    },
    
  },
};

const elSituacaoDocumentoPF =  document.querySelector("#graficoSituacaoDocumentosPF");
var graficoSituacaoDocumentosPF = new ApexCharts(
  elSituacaoDocumentoPF,
  optionsSituacaoDocumentosPF
);
if(elSituacaoDocumentoPF) {
  graficoSituacaoDocumentosPF.render();
}
/* SITUAÇÃO DOCUMENTO PF */



/* GRAU DE VÍNCULO PF */
var optionsGrauVinculoPF = {
  title: {
    text: "Grau de vínculo",
  },
  chart: {
    type: "bar",
    stacked: true,
  },
  series: [
    {
      name: "Mãe",
      data: [193001599],
    },
    {
      name: "Pai",
      data: [84684712],
    },
  ],

  plotOptions: {
    bar: {
      horizontal: true,
      dataLabels: {
        orientation: "vertical",
      },
    },
  },

  legend: {
    show: true
  },

  grid: {
    show: false,
  },
  xaxis: {
    labels: {
      show: false,
    },    
  },
  yaxis: {
    labels: {
      show: false,
    },
    
  },
};

const elGrauVinculo = document.querySelector("#graficoGrauVinculoPF")
var graficoGrauVinculoPF = new ApexCharts(
  elGrauVinculo,
  optionsGrauVinculoPF
);
if(elGrauVinculo) {
  graficoGrauVinculoPF.render();
}
/* GRAU DE VÍNCULO PF */


/* FLAGS TELEFONIA  */
var optionsFlagsTelefonia = {
  title: {
    text: "Flags estratégicas de telefonia",
  },
  chart: {
    type: "bar",
  },
  plotOptions: {
    bar: {
      horizontal: true,
      distributed: true,
    },
  },
  series: [
    {
      name: "",
      data: [6189485,
        122491039,
        235087433,
        173033610,
        207952578],
    },
  ],

  dataLabels: {
    formatter: formatPercentageCalculation,
  },

  yaxis: {
    labels: {
      show: true,
    },
  },
  xaxis: {
    categories: ["Procon", "WhatsAPP", "HOT", "Assinante", "Badphone"],
    labels: {
      show: false,
    },
  },
};
const elGraficoFlagsTelefonia = document.querySelector("#graficoFlagsTelefonia");
var graficoFlagsTelefonia = new ApexCharts(
  elGraficoFlagsTelefonia,
  optionsFlagsTelefonia
);
if(elGraficoFlagsTelefonia) {
  graficoFlagsTelefonia.render();
}
/* FLAGS TELEFONIA  */

/* Telefones por ranking */
var optionsTelefonesPorRanking = {
  title: {
    text: "Telefones por ranking",
  },
  chart: {
    width: "100%",
    type: "pie",
  },
  series: [
    156184077,
    98484034,
    57176434,
    31574862],
  labels: ["Ranking 1", "Ranking 2", "Ranking 3", "Ranking 4"],
  dataLabels: {
    formatter: formatSimplePercentage
  },
  legend: {
    show: true
  }
};

const elGraficoTelefoniaRanking = document.querySelector("#graficoTelefonesPorRanking");
var graficoTelefonesPorRanking = new ApexCharts(
  elGraficoTelefoniaRanking,
  optionsTelefonesPorRanking
);
if(elGraficoTelefoniaRanking) {
  graficoTelefonesPorRanking.render();
}
/* Telefones por ranking */


/* Pessoas por região */
var optionsPessoasPorRegiao = {
  title: {
    text: "Pessoas por região",
  },
  chart: {
    width: "100%",
    type: "treemap",
  },
  plotOptions: {
    treemap: {
      distributed: true,
      enableShades: false
    }    
  },
  labels: {
    show: false
  },
  series: [
    {
      data: [
        {
          x: 'Sudeste',
          y: 89857507
        },
        {
          x: 'Nordeste',
          y: 40660910
        },        
        {
          x: 'Sul',
          y: 27360016
        }, 
        {
          x: 'Centro-oeste',
          y: 13622097
        },           
        {
          x: 'Norte',
          y: 12210866
        },                                
      ]
    }
  ],
  dataLabels: {
    textAnchor: "middle",
    offsetX: 0,
  },
  legend: {
    show: true
  }
};
const elGraficoRegiaoPF = document.querySelector("#graficoPessoasPorRegiaoPF")
var graficoPessoasPorRegiaoPF = new ApexCharts(
  elGraficoRegiaoPF,
  optionsPessoasPorRegiao
);
if(elGraficoRegiaoPF) {
  graficoPessoasPorRegiaoPF.render();
}
/* Pessoas por região */


/* Genero PF */
var optionsPessoasPorGenero = {
  title: {
    text: "Pessoas por gênero",
  },
  chart: {
    width: "100%",
    type: "pie",
  },
  series: [
    126355956,
    122480526,
    3080416],
  labels: ["Masculino", "Feminido", "Indefinido"],
  dataLabels: {
    formatter: formatSimplePercentage
  },
  legend: {
    show: true
  }
};

const elGraficoGenero = document.querySelector("#graficoGeneroPF");
var graficoGeneroPF = new ApexCharts(
  elGraficoGenero,
  optionsPessoasPorGenero
);
if(elGraficoGenero) {
  graficoGeneroPF.render();
}
/* Telefones por ranking */


/* Personas de geração */
var optionsPersonaGeracao = {
  title: {
    text: "Personas de geração",
  },
  chart: {
    type: "bar",
  },
  plotOptions: {
    bar: {
      horizontal: true,
      distributed: true,
    },
  },
  series: [
    {
      name: "",
      data: [
        50423768,
54338032,
48228360,
41954020,
33557174],
    },
  ],

  dataLabels: {
    formatter: formatPercentageCalculation,
  },

  yaxis: {
    labels: {
      show: true,
    },
  },
  xaxis: {
    categories: ["Gen Z",
      "Gen Y",
      "Gen X",
      "Baby boomer",
      "Veteranos"],
    labels: {
      show: false,
    },
  },
};

const elGraficoPersonaGeracao = document.querySelector("#graficoPersonasGeracao");
var graficoPersonasGeracao = new ApexCharts(
  elGraficoPersonaGeracao,
  optionsPersonaGeracao
);
if(elGraficoPersonaGeracao) {
  graficoPersonasGeracao.render();
}
/* Personas de geração */


/* Classe social */
var optionsClasseSocial = {
  title: {
    text: "Classe social",
  },
  chart: {
    type: "bar",
    stacked: true,
  },
  series: [
    {
      name: "",
      data: [
        2335764,
17306900,
24163820,
126313221,
30498682
      ],
    },
  ],
  plotOptions: {
    bar: {
      distributed: true,
      dataLabels: {
        orientation: "vertical",
        position: "end",
        total: {
          enabled: false,
        },

      },
    },
  },
  xaxis: {
    show: false,
 
    categories: [
      "A",
      "B",
      "C",
      "D",
      "E",
      
    ],
  },

  legend: {
    show: false,
  },

  dataLabels: {
    formatter: formatPercentageCalculation
  },

  yaxis: {
    labels: {
      show: false,
    },
  },

};
const elGraficoClasseSocial = document.querySelector("#graficoClasseSocial");
var graficoClasseSocial = new ApexCharts(
  elGraficoClasseSocial,
  optionsClasseSocial
);
if(elGraficoClasseSocial) {
  graficoClasseSocial.render();
}
/* Classe social */


/* Persona de crédito */
var optionsPersonaDeCredito = {
  title: {
    text: "Persona de crédito",
  },
  chart: {
    type: "bar",
    stacked: true,
  },
  series: [
    {
      name: "",
      data: [75082279, 41939926, 26696743, 35763943, 37045274, 35388733],
    },
  ],
  plotOptions: {
    bar: {
      distributed: true,
      dataLabels: {
        orientation: "vertical",
        position: "end",
        total: {
          enabled: false,
        },

      },
    },
  },
  xaxis: {
    show: false,
    labels: {
      rotate: -45,
    },

    categories: ["O bem amado", "sempre presente", "Pago quando puder", "Fujam de mim", "Quem sou eu", "Novos entrantes"],
  },

  legend: {
    show: false,
  },

  dataLabels: {
    formatter: formatPercentageCalculation
  },

  yaxis: {
    labels: {
      show: false,
    },
  },

};

const elGraficoPersonasCredito = document.querySelector("#graficoPersonaCredito");
var graficoPersonaCredito = new ApexCharts(
  elGraficoPersonasCredito,
  optionsPersonaDeCredito
);
if(elGraficoPersonasCredito) {
  graficoPersonaCredito.render();
}
/* Persona de crédito */



/* Persona digital */
var optionsPersonaDigital = {
  title: {
    text: "Persona digital",
  },
  chart: {
    width: "100%",
    type: "treemap",
  },
  plotOptions: {
    treemap: {
      distributed: true,
      enableShades: false
    }    
  },
  labels: {
    show: false
  },
  series: [
    {
      data:  [
        {
          x: 'Digital --',
          y: 129167984
        },
        {
          x: 'Digital +-',
          y: 37394539
        },
        {
          x: 'Digital -',
          y: 36024493
        },
        {
          x: 'Digital +',
          y: 29259398
        },
        {
          x: 'Digital ++',
          y: 20070484
        },
       
    ]
    
    }
  ],
  dataLabels: {
    textAnchor: "middle",
    offsetX: 0,
  },
  legend: {
    show: true
  }
};

const elGraficoPersonaDigital = document.querySelector("#graficoPersonaDigital");
var graficoPersonaDigital = new ApexCharts(
  elGraficoPersonaDigital,
  optionsPersonaDigital
);
if(elGraficoPersonaDigital) {
  graficoPersonaDigital.render();
}
/* Persona digital */



/* Persona de consumo */
var optionsPersonaConsumo = {
  title: {
    text: "Persona de consumo",
  },
  chart: {
    width: "100%",
    type: "treemap",
  },
  plotOptions: {
    treemap: {
      distributed: true,
      enableShades: false
    }    
  },
  labels: {
    show: false
  },
  series: [
    {
      data:  [
        {
          x: 'Pets',
          y: 114760869
        },
        {
          x: 'Crédito pessoal',
          y: 106401983
        },
        {
          x: 'Beleza e estética',
          y: 58025712
        },
        {
          x: 'Moda',
          y: 50674570
        },
        {
          x: 'Motos e acessórios',
          y: 39210234
        },
        {
          x: 'Entretenimento',
          y: 32587795
        },
        {
          x: 'Automóveis',
          y: 28319743
        },
        {
          x: 'Internet',
          y: 25828261
        },
        {
          x: 'Casa e jardim',
          y: 21780664
        },
        {
          x: 'Seguros',
          y: 18025578
        },
    
        {
          x: 'Livros e revistas',
          y: 15926824
        },
        {
          x: 'Gosto pelo luxo',
          y: 12101752
        },
        {
          x: 'Cartão de crédito',
          y: 25828261
        },
    
        {
          x: 'Financiamentos',
          y: 24692551
        },
        {
          x: 'Varejo online',
          y: 18800243
        },
        {
          x: 'Imóveis',
          y: 16227582
        },
        { 
          x: 'Eletrônicos',
          y: 12020897
        },
        {
          x: 'Saúde e bem estar',
          y: 10786430
        },
    
        {
          x: 'Produtos infantis',
          y: 5030176
        }
    ]
    
    }
  ],
  dataLabels: {
    textAnchor: "middle",
    offsetX: 0,
  },
  legend: {
    show: true
  }
};

const elGraficoPersonaConsumo = document.querySelector("#graficoPersonaConsumo");
var graficoPersonaConsumo = new ApexCharts(
  elGraficoPersonaConsumo,
  optionsPersonaConsumo
);
if(elGraficoPersonaConsumo) {
  graficoPersonaConsumo.render();
}
/* Persona de consumo */



/* ScoreMax Propensão */
var optionsScorePropensao = {
  title: {
    text: "Scoremax - Propensão de pagametos",
  },
  chart: {
    type: "bar",
    stacked: true,
  },
  series: [
    {
      name: "",
      data: [16404093,
        30465169,
        24330856,
        58163609,
        89443600,
        33109571],
    },
  ],
  plotOptions: {
    bar: {
      distributed: true,
      dataLabels: {
        orientation: "vertical",
        position: "end",
        total: {
          enabled: false,
        },

      },
    },
  },
  xaxis: {
    show: false,
    labels: {
      rotate: -45,
    },
    categories: [
      "Muito alta",
      "Alta",
      "Média",
      "Baixa",
      "Muito baixa",
      "Zerada"
    ],
  },

  legend: {
    show: false,
  },

  dataLabels: {
    formatter: formatPercentageCalculation
  },

  yaxis: {
    labels: {
      show: false,
    },
  },

};

const elGraficoScorePropensao = document.querySelector("#graficoScorePropensao");
var graficoScorePropensao = new ApexCharts(
  elGraficoScorePropensao,
  optionsScorePropensao
);
if(elGraficoScorePropensao) {
  graficoScorePropensao.render();
}
/* ScoreMax Propensão */


/* Score por faixa de crédito */
var optionsScorePorFaixaCreditoPF = {
  title: {
    text: "Score - Faixa de crédito",
  },
  chart: {
    type: "bar",
    stacked: true,
  },
  series: [
    {
      name: "",
      data: [41376569,
        26696743,
        37045274,
        41939926,
        75082279],
    },
  ],
  plotOptions: {
    bar: {
      distributed: true,
      dataLabels: {
        orientation: "vertical",
        position: "end",
        total: {
          enabled: false,
        },

      },
    },
  },
  xaxis: {
    show: false,
    labels: {
      rotate: -45,
    },

    categories: [
      "Muito alto",
      "Alto",
      "Médio",
      "Baixo",
      "Muito baixo"
    ],
  },

  legend: {
    show: false,
  },

  dataLabels: {
    formatter: formatPercentageCalculation
  },

  yaxis: {
    labels: {
      show: false,
    },
  },

};
const elGraficoScoreFaixaCredito = document.querySelector("#graficoScoreFaixaCreditoPF");
var graficoScoreFaixaCreditoPF = new ApexCharts(
  elGraficoScoreFaixaCredito,
  optionsScorePorFaixaCreditoPF
);
if(elGraficoScoreFaixaCredito) {
  graficoScoreFaixaCreditoPF.render();
}
/* Score por faixa de crédito */



/* Persona demográfica PF */
var optionsPersonaDemograficaPF = {
  title: {
    text: "Personas demográficas ≈ 80%",
  },
  chart: {
    type: "line",
  },
  series: [
    {
      name: "",
      data: [
        36177318,
        25479843,
        23428368,
        15987154,
        14006947,
        13443300,
        12124606,
        9892046,
        9774377,
        5915676,
        4576035,
        4213474,
        4002105,
        3513170
        ],
    },
  ],
  plotOptions: {
    bar: {
      distributed: true,
      dataLabels: {
        orientation: "vertical",
        position: "end",
        total: {
          enabled: false,
        },

      },
    },
  },
  xaxis: {
    show: false,
    labels: {
      rotate: -45,
    },

    categories: [
      ["Adulto vista", "modesta"],
      "Quero descansar",
      "Jovem nem nem",
      "Home provedor",
      ["Mulher com foco", "no emprego"],
      ["Jovem início", "de trabalho"],
      "Jovem aprendiz",
      "Veterano sobrevivente",
      "Veterana solitária",
      "Adulto sem estudo",
      "Veterano aposentado",
      ["Jovem bem", "encaminhado"],
      "Vida sofrida",
      ["Jovem", "carreira-definida"]
    ],
  },

  legend: {
    show: false,
  },
  stroke: {
    curve: 'straight',
    show: true
  },
  dataLabels: {
    enabled: true,
    rotate: 45,
    textAnchor: "middle",
    offsetX: 5,
    offsetY: -10,
    background: {
      enabled: true,
      foreColor: '#fff',
      borderRadius: 2,
      padding: 4,
      opacity: 0.9,
      borderWidth: 1,
      borderColor: '#fff'
    },    
  },

  markers: {
    size: 7,
},

  yaxis: {
    labels: {
      show: false,
    },
  },

  grid: {
    row: {
      colors: ['#ECECF8', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    }
  },  


  tooltip: {
    x: {
     show: false
    },
    y: {
      formatter: function (value, options) {
        // console.log(options.w.config.chart.type)
        const values = options.series[0];
        const total = values.reduce((acumulator, currentValue) => {
          return acumulator + currentValue
        }, 0)

        let formattedNumber = (value / total) * 100;

        return `${formattedNumber.toFixed(2)}%`;     
      },
    },
  },


};
const elGraficoPersonaDemografica = document.querySelector("#graficoPersonaDemograficaPF");
var graficoPersonaDemograficaPF = new ApexCharts(
  elGraficoPersonaDemografica,
  optionsPersonaDemograficaPF
);
if(elGraficoPersonaDemografica) {
  graficoPersonaDemograficaPF.render();
}
/* Persona demográfica PF */



