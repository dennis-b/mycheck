export const getGraphConfig = ({ title, values }: any) => {
    return {
        title: { text: title },
        xAxis: [{
            type: 'datetime',
            rotation: 45,
            format: '{value:%Y-%m-%d-%m-%s}',
            title: {
                enabled: true,
                text:
                    `<span style="color: red">hold to your hat</span> 
                     <b> / </b>
                     <span style="color: green">good time to take off your hat</span> 
                    `
            }
        }],
        yAxis: [{ title: { text: `wind speed (kph)` } }],
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    formatter: function (): any {
                        // @ts-ignore
                        const value = this.y
                        const color = value > 6 ? 'red' : 'green';
                        return `<div style="color: ${color}">${value}</div>`;


                    }
                }
            },
        },
        series: [{ data: values }]
    }
}
