

document.addEventListener('DOMContentLoaded', function () {
    try {
        // Simulate an error by accessing a non-existent element
        const date = new Date();
        document.getElementById('date').innerText = ` ${date.getMonth() + 1} / ${date.getDate()}  /  ${date.getFullYear()}`;
    } catch (error) {

        window.location.href = 'error.html';
    }
});

function generatePdf() {
    try {
        document.getElementById('invoice').style.width = '90%';
        const ele = document.getElementById('invoice');
        html2pdf().from(ele).save(`ElectraOptima_Residential_Report.pdf`);
        setTimeout(() => {
            document.getElementById('invoice').style.width = '80%';
        }, 0);
    } catch (error) {

        // Redirect to an error page (error.html)
        window.location.href = 'error.html';
    }
}

jQuery(document).ready(function () {
    try {
        $('#btn-print').click(function () {
            try {
                document.getElementById('btn').style.display = 'none';
                window.print();

                document.getElementById('btn').style.display = 'block';
            } catch (error) {

                window.location.href = 'error.html';

            }
        });
    } catch (error) {

        // Redirect to an error page (error.html)
        window.location.href = 'error.html';
    }
});

