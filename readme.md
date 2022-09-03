---latihan javascript
mengulang materi perulangan dan percabangan.

//membuat game btk( batu gunting kertas )

//gambaran dan rencana dari design tampilan game btk
1. memiliki dua sisi yaitu sisi atas layar untuk lawan( bot ) dan bagian bawah untuk palyer dan di antranya ada logo 'vs', dan setiap pemain memiliki kartu yang bergambar batu /gunting /kertas tergantung sesuai pilihan.
2. pada bagian lawan( bot ) hanya menamiplakan kartu btk dan sedangkan player menampilkan pilihan kartu dan kartu yang di pilih player
3. di berikan tombol surender untuk mengakhiri game dan menampilkan peringkat
4. game ini memiliki fitur responsif agar mudah di mainkan untuk semua perangkat
5. dan fitur dark mode, posisi tombol akan di atur nanti

//cara kerja game
1. pada awal game setiap kartu pemain akan menapilkan tanda tantya( ? )
2. ketika player memilih kartu yang ingin di gunakan maka otomatis lawan( bot ) telah memiliki jawaban nya secara random
3. setalah itu sistem akan mengelola inputan value palyer akan di bandingkan dengan value yang dimiliki oleh bot
4. apabila hasil dari perbandingan tersebut di dapat maka sistem akan menghitung mudur.
5. setalah hitung mundur selesai maka kartu akan menmpilkan hasil nya, jadi kartu akan di beri efek berputar secara horizontal agar memberikan kesan kartu sedang di balik.
6. tahap akhir semua kemenangan dan kekalahan akan di kumpulkan dan di jadikan sebagai patokan kemeangan, yang akan di tampilkan apabila player menekan tombol surender