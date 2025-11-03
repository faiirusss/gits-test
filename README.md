# FAIRUS SALIMI
**Fullstack Intern**

---

## 1. A000124 of Sloane’s OEIS (Score: 20)

### Deskripsi Soal

Buatlah sebuah program dengan output sebagai berikut. Input bisa dinamis yang menghasilkan output yang berbeda-beda sesuai input yang dimasukan. Gunakan rumus **A000124 of Sloane’s OEIS**.

**Contoh:**

- Input: 7
- Output: 1-2-4-7-11-16-22

### Soal

Buat fungsi untuk menyelesaikan rumus A000124 of Sloane’s OEIS!

**Screenshot Output:**
![Screenshot Soal 1](https://github.com/faiirusss/gits-test-assets/blob/main/soal1.jpg?raw=true)

---

## 2. Dense Ranking (Score: 30)

### Deskripsi Soal

GITS sedang bermain permainan arcade, dan dalam setiap permainan GITS ingin naik ke peringkat tertinggi dan juga ingin mengetahui setiap peringkat di setiap permainan. Dalam permainan ini menggunakan skema **Dense Ranking** dengan aturan sebagai berikut:

- Peringkat pertama dapat diraih oleh pemain yang memiliki skor tertinggi.
- Pemain yang memiliki skor yang sama memiliki peringkat yang sama.

**Contoh:**

- Empat pemain memiliki skor tertinggi sebagai berikut 100, 80, 80, dan 70, maka masing-masing pemain itu memiliki rangking 1, 2, 2, dan 3.
- Jika GITS memiliki skor 60, 70, 100 setelah pertandingan maka rangking yang didapatkan adalah 4, 3, dan 1.

**Sampel Input & Output:**

![Screenshot Soal 2](https://github.com/faiirusss/gits-test-assets/blob/main/soal2.jpg?raw=true)

---

## 3. Highest Palindrome (Score: 50)

### Deskripsi Soal

Diberikan sebuah string yang merepresentasikan sebuah angka, tujuan utamanya adalah untuk menemukan palindrom terbesar yang bisa dibentuk dengan mengubah maksimal 'k' digit dalam string tersebut. Palindrom adalah angka yang terbaca sama baik dari depan maupun dari belakang. Kamu diberikan sebuah string 's' yang merepresentasikan sebuah angka dan sebuah bilangan bulat 'k'. Tugas kamu adalah menemukan Highest Palindrome yang dapat dibentuk dengan mengubah paling banyak 'k' digit pada string 's'.

**Contoh:**

**Sampel 1:**
```
Input:
string: 3943
k: 1
palindrom:
1. 3943 => 3993
2. 3943 => 3443
Output: 3993
```
Penjelasan: Dari bentuk palindrom yang diperoleh maka highest palindrome-nya adalah 3993 dikarenakan 3993 > 3443.

**Sampel 2:**
```
Input:
string: 932239
k: 2
palindrom:
1. 932239 => sudah palindrome
2. Perlu replacement sebanyak k = 2 untuk mendapatkan nilai tertinggi => 992299
Output: 992299
```
Penjelasan: Dari bentuk palindrom yang diperoleh maka highest palindrome-nya adalah 992299 dikarenakan 992299 > 932239.

**Screenshot Output:**
![Screenshot Soal 3](https://github.com/faiirusss/gits-test-assets/blob/main/soal3.jpg?raw=true)

---

### Aturan:
1. Jika dari sebuah string tidak ditemukan bentuk palindrome-nya meski sudah melakukan replacement dan tidak merepresentasikan sebuah angka maka akan mengeluarkan output -1.
2. Tidak boleh menggunakan fungsi bawaan/tools untuk pencarian/filter/sort.
3. Tidak boleh menggunakan looping.
4. Hanya diperkenankan menggunakan rekursif.

### Soal:
Buat fungsi yang digunakan untuk menyelesaikan permasalahan Highest Palindrome!
