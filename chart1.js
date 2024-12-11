// Data chart default
const chartData = {
    hari: [500000, 50000, 300000, 200000],
    bulan: [12500000, 1550000, 9300000, 6200000],
    tahun: [180000000, 18000000, 108000000, 72000000]
};

const labels = ['Total Uang', 'Total Pengeluaran', 'Total Penjualan', 'Total Tabungan'];

// Fungsi untuk memperbarui data kartu
function updateCards(filter) {
    const cards = document.querySelectorAll('.insights .middle .left h1');
    const progressNumbers = document.querySelectorAll('.insights .progress .number p');

    chartData[filter].forEach((value, index) => {
        // Update nilai di kartu
        cards[index].textContent = `Rp${value.toLocaleString()}`;

        // Update nilai progress (contoh: menghitung persentase terhadap Total Uang)
        const percentage = ((value / chartData[filter][0]) * 100).toFixed(0);
        progressNumbers[index].textContent = `${percentage}%`;
    });
}

// Fungsi untuk memperbarui Bar Chart
function updateBarChart(barChart, filter) {
    barChart.data.datasets[0].data = chartData[filter];
    barChart.update();
}

// Fungsi untuk memperbarui Pie Chart
function updatePieChart(pieChart, filter) {
    pieChart.data.datasets[0].data = chartData[filter];
    pieChart.update();
}

document.addEventListener("DOMContentLoaded", function () {
    // Inisialisasi Bar Chart
    const ctxBar = document.getElementById('myChart').getContext('2d');
    const barChart = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Data Keuangan',
                data: chartData['bulan'], // Default data bulan
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Inisialisasi Pie Chart
    const ctxPie = document.getElementById('myChart1').getContext('2d');
    const pieChart = new Chart(ctxPie, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                label: 'Data Keuangan',
                data: chartData['bulan'], // Default data bulan
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });

    // Default update dengan data "bulan"
    updateCards('bulan');

    // Event listener untuk dropdown
    document.getElementById('timeFilter').addEventListener('change', function (e) {
        const filter = e.target.value;

        // Update semua elemen berdasarkan filter
        updateCards(filter);
        updateBarChart(barChart, filter);
        updatePieChart(pieChart, filter);
    });
});
