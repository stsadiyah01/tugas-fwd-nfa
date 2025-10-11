<!DOCTYPE html>
<html>
<head>
    <title>Form Nilai Ujian Siti Sa'diyah STT-NF</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f6f8;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container {
            background: white;
            padding: 25px 30px;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            width: 800px;
        }
        h2 {
            text-align: center;
            margin-bottom: 20px;
        }
        input[type=text], input[type=email], input[type=number] {
            width: 100%;
            padding: 8px;
            margin: 5px 0 12px;
            border: 1px solid #ccc;
            border-radius: 6px;
        }
        input[type=submit] {
            width: 100px;
            padding: 10px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
        }
        input[type=reset] {
            width: 100px;
            padding: 10px;
            background-color: #da290eff;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #4CAF50;
            color: white;
        }
        .status-lulus {
            color: green;
            font-weight: bold;
        }
        .status-remedial {
            color: red;
            font-weight: bold;
        }

    </style>
</head>
<body>
    <div class="container">
        <h2>Form Nilai Ujian</h2>
        <form method="GET" action="">
            <label>Nama:</label>
            <input type="text" name="nama" placeholder="Masukkan nama anda" required>

            <label>Email:</label>
            <input type="email" name="email" placeholder="Masukkan email anda" required>

            <label>Nilai Ujian:</label>
            <input type="number" name="nilai"  placeholder="Masukkan Nilai Ujian Anda" min="0" max="100" required>

            <input class="kirim" type="submit" name="submit" value="Kirim">
            <input class="kirim" type="reset" name="submit" value="Batal">
        </form>

        <?php
        if (isset($_GET['submit'])) {
            $nama = $_GET['nama'];
            $email = $_GET['email'];
            $nilai = $_GET['nilai'];

            // struktur if untuk menentukan lulus atau remedial
            if ($nilai > 70) {
                $status = "<span class='status-lulus'>Lulus</span>";
            } else {
                $status = "<span class='status-remedial'>Remedial</span>";
            }

            echo "
            <h3>Hasil Penilaian</h3>
            <table>
                <tr>
                    <th>Nama</th>
                    <th>Email</th>
                    <th>Nilai</th>
                    <th>Status</th>
                </tr>
                <tr>
                    <td>$nama</td>
                    <td>$email</td>
                    <td>$nilai</td>
                    <td>$status</td>
                </tr>
            </table>
            ";
        }
        ?>
    </div>
</body>
</html>
