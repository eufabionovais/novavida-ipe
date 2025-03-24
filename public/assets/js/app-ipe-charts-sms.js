

// GRÁFICO DISPAROS POR HORA
const elGraficoDisparos = document.getElementById('chartDisparos');

if(elGraficoDisparos) {

    const chartDisparos = echarts.init(elGraficoDisparos);
    
    const dataDisparosHora = [0, 0, 0, 10, 25, 45, 30, 20, 50, 40, 35];
    
    const optionDisparos = {
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'category', data: ['05h', '06h', '07h', '08h', '09h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h', '19h', '20h', '21h', '22h', '23h'] },
        yAxis: { type: 'value', name: 'Qtd. Disparos' },
        series: [{
            name: 'Disparos',
            type: 'bar',
            data: dataDisparosHora.map((valor, index) => ({
                value: valor,
                itemStyle: { color: getChartColors(index) } // Aplica a cor com base no index
            })),
        }],
    };
    
    chartDisparos.setOption(optionDisparos);
}

// FIM GRÁFICO DISPAROS POR HORA


// GRÁFICO LEITURAS IDENTIFICADAS
const elGraficoLeituras = document.getElementById('chartLeituras');

if(elGraficoLeituras) {

    const chartLeituras = echarts.init(elGraficoLeituras);
    
    const dataLeiturasIdentificadas = [0, 0, 0, 10, 25, 45, 30, 20, 50, 40, 35];
    
    const optionLeituras = {
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'category', data: ['05h', '06h', '07h', '08h', '09h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h', '19h', '20h', '21h', '22h', '23h'] },
        yAxis: { type: 'value', name: 'Qtd. Leituras' },
        series: [{
            name: 'Leituras',
            type: 'line',
            data: dataLeiturasIdentificadas.map((valor, index) => ({
                value: valor,
                itemStyle: { color: getChartColors(index)} // Aplica a cor com base no index
            })),
            lineStyle: { width: 4, color: '#aaa' },
            symbolSize: 10
        }]
    };
    chartLeituras.setOption(optionLeituras);
}

// FIM GRÁFICO LEITURAS IDENTIFICADAS

// GRÁFICO DISTRIBUIÇÃO DE STATUS (BARRAS + PERCENTUAL)
// =============================================

const elGraficoEntregas = document.getElementById('chartStatusBarras');
if(elGraficoEntregas) {

    const chartStatusBarras = echarts.init(elGraficoEntregas);
    const categoriasStatus = ['Entregue', 'Não Entregue', 'Enviada', 'Cancelada', 'Lida', 'Inválida'];
    const valoresStatus = [200, 60, 30, 10, 5, 20];
    const totalStatus = valoresStatus.reduce((soma, val) => soma + val, 0);
    
    const optionStatusBarras = {
        tooltip: {
            trigger: 'axis',
            formatter: (params) => {
                if (params[0]) {
                    const { name, value } = params[0];
                    const perc = ((value / totalStatus) * 100).toFixed(1);
                    return `${name}<br/>Qtd: ${value}<br/>% do Total: ${perc}%`;
                }
                return '';
            }
        },
        xAxis: { type: 'category', data: categoriasStatus },
        yAxis: { type: 'value' },
        series: [
            {
                name: 'Status',
                type: 'bar',
                data: valoresStatus.map((valor, index) => ({
                    value: valor,
                    itemStyle: { color: getChartColors(index) } // Aplica a cor com base no index
                })),
                label: {
                    show: true,
                    position: 'top',
                    formatter: (params) => {
                        return params.value;
                    }
                }
            },
            {
                name: 'Porcentagem',
                type: 'custom',
                renderItem: (params, api) => {
                    const categoryIndex = api.value(0);
                    const value = api.value(1);
                    const coord = api.coord([categoryIndex, value]);
                    return {
                        type: 'text',
                        position: [coord[0], params.coordSys.y - 50],
                        style: {
                            text: `${((value / totalStatus) * 100).toFixed(1)}%`,
                            fill: '#000',
                            fontSize: 12,
                            fontWeight: 'bold',
                            align: 'center'
                        }
                    };
                },
                encode: { x: 0, y: 1 },
                data: valoresStatus.map((val, index) => [index, val])
            }
        ]
    };
    
    chartStatusBarras.setOption(optionStatusBarras);
}
// GRAFICO ENTREGAS



// GRÁFICO GEOLOCALIZAÇÃO
// const mapChart = echarts.init(document.getElementById('mapChart'));
// const barChart = echarts.init(document.getElementById('barContainer'));
// const mapChartBar = echarts.init(document.getElementById('mapChartBar'));

// const loader = document.getElementById('loader');
// const chartsContent = document.getElementById('chartsContent');

// fetch("assets/js/br.json")
//     .then(response => response.json())
//     .then(data => {
//         loader.style.display = 'none';
//         chartsContent.style.visibility = 'visible';

//         const geoJson = data;
//         echarts.registerMap('Brazil', geoJson);
        
//         const stateData = [
//             { name: 'Acre', sigla: 'AC', value: 200 },
//             { name: 'Alagoas', sigla: 'AL', value: 230 },
//             { name: 'Amapá', sigla: 'AP', value: 100 },
//             { name: 'Amazonas', sigla: 'AM', value: 100 },
//             { name: 'Bahia', sigla: 'BA', value: 90 },
//             { name: 'Ceará', sigla: 'CE', value: 80 },
//             { name: 'Distrito Federal', sigla: 'DF', value: 150 },
//             { name: 'Espírito Santo', sigla: 'ES', value: 120 },
//             { name: 'Goiás', sigla: 'GO', value: 110 },
//             { name: 'Maranhão', sigla: 'MA', value: 70 },
//             { name: 'Mato Grosso', sigla: 'MT', value: 75 },
//             { name: 'Mato Grosso do Sul', sigla: 'MS', value: 0 },
//             { name: 'Minas Gerais', sigla: 'MG', value: 0 },
//             { name: 'Pará', sigla: 'PA', value: 0 },
//             { name: 'Paraíba', sigla: 'PB', value: 175 },
//             { name: 'Paraná', sigla: 'PR', value: 190 },
//             { name: 'Pernambuco', sigla: 'PE', value: 210 },
//             { name: 'Piauí', sigla: 'PI', value: 80 },
//             { name: 'Rio de Janeiro', sigla: 'RJ', value: 235 },
//             { name: 'Rio Grande do Norte', sigla: 'RN', value: 100 },
//             { name: 'Rio Grande do Sul', sigla: 'RS', value: 90 },
//             { name: 'Rondônia', sigla: 'RO', value: 70 },
//             { name: 'Roraima', sigla: 'RR', value: 80 },
//             { name: 'Santa Catarina', sigla: 'SC', value: 90 },
//             { name: 'São Paulo', sigla: 'SP', value: 240 },
//             { name: 'Sergipe', sigla: 'SE', value: 120 },
//             { name: 'Tocantins', sigla: 'TO', value: 110 }
//         ];

//         const totalValue = stateData.reduce((sum, state) => sum + state.value, 0);

//         const option = {
//             tooltip: { 
//                 trigger: 'item',
//                 formatter: function (params) {
//                     if (params.data) {
//                         const percentage = ((params.data.value / totalValue) * 100).toFixed(2);
//                         return `${params.name}: ${percentage}%`;
//                     }
//                     return `${params.name}: 0% do total`;
//                 }
//             },
//             geo: {
//                 map: 'Brazil',
//                 aspectScale: 0.85,
//                 layoutCenter: ['50%', '50%'],
//                 layoutSize: '90%',
//                 itemStyle: {
//                     borderColor: '#aaa',
//                     areaColor: '#e0e0e0'
//                 }
//             },
//             series: [
//                 {
//                     type: 'map',
//                     map: 'Brazil',
//                     geoIndex: 0,
//                     data: stateData
//                 }
//             ]
//         };

//         const sortedStateData = stateData
//         .filter(item => item.value > 0);









//         const barChartOption = {
//             tooltip: {
//                 trigger: 'axis',
//                 axisPointer: { type: 'shadow' }
//             },
//             grid: {
//                 left: '2%',
//                 right: '2%',
//                 bottom: '5%',
//                 containLabel: true
//             },
//             xAxis: {
//                 type: 'category',
//                 data: sortedStateData.map(item => item.sigla),
//                 axisLabel: { rotate: 45 }
//             },
//             yAxis: {
//                 type: 'value'
//             },
//             series: [
//                 {
//                     name: 'Quantidade',
//                     type: 'bar',
//                     data: sortedStateData.map((item, index) => ({
//                         value: item.value,
//                         itemStyle: { color: getChartColors(index) }
//                     })),
//                     label: {
//                         show: true,
//                         position: 'top',
//                         color: '#000'
//                     }
//                 }
//             ]
//         };

//         mapChartBar.setOption(barChartOption);

        
//         mapChart.setOption(option);
       
//         mapChart.on('mouseover', function (params) {
//             if (params.componentType === 'series') {
//                 barChart.dispatchAction({
//                     type: 'highlight',
//                     seriesIndex: 0,
//                     dataIndex: params.dataIndex
//                 });
//             }
//         });

//         mapChart.on('mouseout', function () {
//             barChart.dispatchAction({
//                 type: 'downplay',
//                 seriesIndex: 0
//             });
//         });
//     })
//     .catch(error => {
//         loader.innerText = "Erro ao carregar os dados.";
//         console.error("Erro ao carregar JSON:", error);
//     });


/* PESSOAS POR ESTADO */
let optionGeolocalizacao = {
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
      end: 50,
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

const somaDataGeolocalizacao = optionGeolocalizacao.series[0].data.reduce(
  (acumulador, itemAtual) => {
    return acumulador + itemAtual.value;
  },
  0,
);

const optionsGeolocalizacaoClone = optionGeolocalizacao.series[0].data.map(
  (item) => {
    return {
      ...item,
      value: `${((item.value / somaDataGeolocalizacao) * 100).toFixed(1)}`,
      valorAbsoluto: item.value,
    };
  },
);

const elGraficoGeolocalizacao = document.querySelector(
  "#graficoGeolocalizacao",
);

if (elGraficoGeolocalizacao) {
  let graficoGeolocalizacao = echarts.init(elGraficoGeolocalizacao, null, {
    height: 300,
  });
  optionGeolocalizacao.series[0].data = optionsGeolocalizacaoClone;
  graficoGeolocalizacao.setOption(optionGeolocalizacao);
}
// colecaoConfiguracoesGraficosPf.push(optionGeolocalizacao);
/* FIM GRÁFICO GEOLOCALIZAÇÃO */    