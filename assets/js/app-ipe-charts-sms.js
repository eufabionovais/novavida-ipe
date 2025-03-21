

// GRÁFICO DISPAROS POR HORA
const chartDisparos = echarts.init(document.getElementById('chartDisparos'));

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
    // dataZoom: [
    //     {
    //         type: "slider",
    //         show: true,
    //         xAxisIndex: [0],
    //         start: 10,
    //         end: 30,
    //         bottom: 10,
    //         height: 20,
    //     },
    // ],
};

chartDisparos.setOption(optionDisparos);
// FIM GRÁFICO DISPAROS POR HORA


// GRÁFICO LEITURAS IDENTIFICADAS
const chartLeituras = echarts.init(document.getElementById('chartLeituras'));

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
// FIM GRÁFICO LEITURAS IDENTIFICADAS

// GRÁFICO DISTRIBUIÇÃO DE STATUS (BARRAS + PERCENTUAL)
// =============================================
const chartStatusBarras = echarts.init(document.getElementById('chartStatusBarras'));
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



// GRÁFICO GEOLOCALIZAÇÃO
const chart = echarts.init(document.getElementById('mapChart'));
const barChart = echarts.init(document.getElementById('barContainer'));
const mapChartBar = echarts.init(document.getElementById('mapChartBar'));

const loader = document.getElementById('loader');
const chartsContent = document.getElementById('chartsContent');

fetch("assets/js/br.json")
    .then(response => response.json())
    .then(data => {
        loader.style.display = 'none';
        chartsContent.style.visibility = 'visible';

        const geoJson = data;
        echarts.registerMap('Brazil', geoJson);
        
        const stateData = [
            { name: 'Acre', sigla: 'AC', value: 200 },
            { name: 'Alagoas', sigla: 'AL', value: 230 },
            { name: 'Amapá', sigla: 'AP', value: 100 },
            { name: 'Amazonas', sigla: 'AM', value: 100 },
            { name: 'Bahia', sigla: 'BA', value: 90 },
            { name: 'Ceará', sigla: 'CE', value: 80 },
            { name: 'Distrito Federal', sigla: 'DF', value: 150 },
            { name: 'Espírito Santo', sigla: 'ES', value: 120 },
            { name: 'Goiás', sigla: 'GO', value: 110 },
            { name: 'Maranhão', sigla: 'MA', value: 70 },
            { name: 'Mato Grosso', sigla: 'MT', value: 75 },
            { name: 'Mato Grosso do Sul', sigla: 'MS', value: 0 },
            { name: 'Minas Gerais', sigla: 'MG', value: 0 },
            { name: 'Pará', sigla: 'PA', value: 0 },
            { name: 'Paraíba', sigla: 'PB', value: 175 },
            { name: 'Paraná', sigla: 'PR', value: 190 },
            { name: 'Pernambuco', sigla: 'PE', value: 210 },
            { name: 'Piauí', sigla: 'PI', value: 80 },
            { name: 'Rio de Janeiro', sigla: 'RJ', value: 235 },
            { name: 'Rio Grande do Norte', sigla: 'RN', value: 100 },
            { name: 'Rio Grande do Sul', sigla: 'RS', value: 90 },
            { name: 'Rondônia', sigla: 'RO', value: 70 },
            { name: 'Roraima', sigla: 'RR', value: 80 },
            { name: 'Santa Catarina', sigla: 'SC', value: 90 },
            { name: 'São Paulo', sigla: 'SP', value: 240 },
            { name: 'Sergipe', sigla: 'SE', value: 120 },
            { name: 'Tocantins', sigla: 'TO', value: 110 }
        ];

        const totalValue = stateData.reduce((sum, state) => sum + state.value, 0);

        const option = {
            tooltip: { 
                trigger: 'item',
                formatter: function (params) {
                    if (params.data) {
                        const percentage = ((params.data.value / totalValue) * 100).toFixed(2);
                        return `${params.name}: ${percentage}%`;
                    }
                    return `${params.name}: 0% do total`;
                }
            },
            geo: {
                map: 'Brazil',
                aspectScale: 0.85,
                layoutCenter: ['50%', '50%'],
                layoutSize: '90%',
                itemStyle: {
                    borderColor: '#aaa',
                    areaColor: '#e0e0e0'
                }
            },
            series: [
                {
                    type: 'map',
                    map: 'Brazil',
                    geoIndex: 0,
                    data: stateData
                }
            ]
        };

        const sortedStateData = stateData
        .filter(item => item.value > 0);

        const barChartOption = {
            tooltip: {
                trigger: 'axis',
                axisPointer: { type: 'shadow' }
            },
            grid: {
                left: '2%',
                right: '2%',
                bottom: '5%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: sortedStateData.map(item => item.sigla),
                axisLabel: { rotate: 45 }
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'Quantidade',
                    type: 'bar',
                    data: sortedStateData.map((item, index) => ({
                        value: item.value,
                        itemStyle: { color: getChartColors(index) }
                    })),
                    label: {
                        show: true,
                        position: 'top',
                        color: '#000'
                    }
                }
            ]
        };

        mapChartBar.setOption(barChartOption);
        chart.setOption(option);
       
        chart.on('mouseover', function (params) {
            if (params.componentType === 'series') {
                barChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: params.dataIndex
                });
            }
        });

        chart.on('mouseout', function () {
            barChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0
            });
        });
    })
    .catch(error => {
        loader.innerText = "Erro ao carregar os dados.";
        console.error("Erro ao carregar JSON:", error);
    });
