let no = 1;

        function simpanNilai() {
            const nim = document.getElementById('nim').value;
            const nama = document.getElementById('nama').value;

            const presensiTeori = parseFloat(document.getElementById('presensiTeori').value);
            const tugasTeori = parseFloat(document.getElementById('tugasTeori').value);
            const utsTeori = parseFloat(document.getElementById('utsTeori').value);
            const uasTeori = parseFloat(document.getElementById('uasTeori').value);

            const presensiPraktik = parseFloat(document.getElementById('presensiPraktik').value);
            const tugasPraktik = parseFloat(document.getElementById('tugasPraktik').value);
            const utsPraktik = parseFloat(document.getElementById('utsPraktik').value);
            const uasPraktik = parseFloat(document.getElementById('uasPraktik').value);

            const nilaiAkhirTeori = ((presensiTeori /14*100)* 0.1) + (tugasTeori * 0.3) + (utsTeori * 0.3) + (uasTeori * 0.3);
            const nilaiAkhirPraktik = ((presensiPraktik /14*100)* 0.1) + (tugasPraktik * 0.3) + (utsPraktik * 0.3) + (uasPraktik * 0.3);

            const nilaiAkhir = (nilaiAkhirTeori + nilaiAkhirPraktik) / 2;
            let grade = '';

            if (!nim || !nama || !presensiTeori || !tugasTeori || !utsTeori || !uasTeori ||
                !presensiPraktik || !tugasPraktik || !utsPraktik || !uasPraktik) {
                alert('Lengkapi Data Anda');
                return;
            }

            if (nilaiAkhir >= 80) {
                grade = 'A';
            } else if (nilaiAkhir >= 70) {
                grade = 'B';
            } else if (nilaiAkhir >= 60) {
                grade = 'C';
            } else if (nilaiAkhir >= 50) {
                grade = 'D';
            } 
            else {
                grade = 'E';
            }
        
                    
        /*create by zidanmubarok */
    
            const table = document.getElementById('tabelNilai');
            const row = table.insertRow();

            row.insertCell(0).innerHTML = no++;
            row.insertCell(1).innerHTML = nim;
            row.insertCell(2).innerHTML = nama;
            row.insertCell(3).innerHTML = ((presensiTeori + presensiPraktik) / 28*100)+'%';
            row.insertCell(4).innerHTML = ((tugasTeori + tugasPraktik) / 2).toFixed(2);
            row.insertCell(5).innerHTML = ((utsTeori + utsPraktik) / 2).toFixed(2);
            row.insertCell(6).innerHTML = ((uasTeori + uasPraktik) / 2).toFixed(2);
            row.insertCell(7).innerHTML = nilaiAkhir.toFixed(2);
            row.insertCell(8).innerHTML = grade;
        }

        function resetTabel() {
            document.getElementById('tabelNilai').innerHTML = '';
            no = 1;
        }