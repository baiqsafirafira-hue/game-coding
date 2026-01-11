const questionBank = {
    quiz: [
        // HTML
        { lang: 'html', q: "Apa kepanjangan dari HTML?", a: "HyperText Markup Language", opt: ["HyperText Markup Language", "HyperText Machine Language", "HomeTool Markup Language", "HyperLink Markup Language"] },
        { lang: 'html', q: "Tag untuk membuat baris baru?", a: "<br>", opt: ["<br>", "<lb>", "<break>", "<newline>"] },
        { lang: 'html', q: "Tag untuk membuat teks tebal?", a: "<strong>", opt: ["<bold>", "<strong>", "<bb>", "<thick>"] },
        { lang: 'html', q: "Atribut untuk link tujuan di <a>?", a: "href", opt: ["src", "href", "link", "to"] },
        { lang: 'html', q: "Versi HTML terbaru saat ini?", a: "HTML5", opt: ["HTML5", "HTMLX", "HTML 2024", "HTML4"] },
        { lang: 'html', q: "Tag Container generik?", a: "<div>", opt: ["<section>", "<div>", "<con>", "<box>"] },
        { lang: 'html', q: "Tag untuk membuat list berurutan?", a: "<ol>", opt: ["<ul>", "<ol>", "<li>", "<dl>"] },
        { lang: 'html', q: "Elemen <title> berada di dalam?", a: "<head>", opt: ["<body>", "<head>", "<footer>", "<header>"] },
        { lang: 'html', q: "Atribut untuk teks alternatif gambar?", a: "alt", opt: ["title", "src", "alt", "desc"] },
        { lang: 'html', q: "input type='checkbox' digunakan untuk?", a: "Pilihan banyak", opt: ["Pilihan banyak", "Pilihan satu", "Teks", "Password"] },

        // CSS
        { lang: 'css', q: "CSS singkatan dari?", a: "Cascading Style Sheets", opt: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"] },
        { lang: 'css', q: "Properti untuk warna teks?", a: "color", opt: ["font-color", "text-color", "color", "foreground"] },
        { lang: 'css', q: "Untuk membuat teks miring?", a: "font-style: italic", opt: ["font-style: italic", "text-decoration: italic", "font: skewed", "style: italic"] },
        { lang: 'css', q: "Menghilangkan garis bawah link?", a: "text-decoration: none", opt: ["text-style: none", "text-decoration: none", "underline: none", "border: none"] },
        { lang: 'css', q: "Selector untuk id='header'?", a: "#header", opt: [".header", "#header", "header", "*header"] },
        { lang: 'css', q: "Padding adalah?", a: "Jarak dalam", opt: ["Jarak dalam", "Jarak luar", "Garis tepi", "Bayangan"] },
        { lang: 'css', q: "Flexbox: membuat item ke tengah horizontal?", a: "justify-content: center", opt: ["align-items: center", "justify-content: center", "text-align: center", "center: true"] },
        { lang: 'css', q: "Satuan relatif terhadap root?", a: "rem", opt: ["em", "rem", "px", "%"] },
        { lang: 'css', q: "Warna background transparan?", a: "background: transparent", opt: ["color: none", "background: transparent", "opacity: 0", "visibility: hidden"] },
        { lang: 'css', q: "z-index berfungsi untuk?", a: "Urutan tumpukan", opt: ["Ukuran font", "Urutan tumpukan", "Zoom level", "Posisi X"] },

        // JavaScript
        { lang: 'js', q: "Tipe data untuk true/false?", a: "Boolean", opt: ["String", "Boolean", "Binary", "Logic"] },
        { lang: 'js', q: "Variabel yang tidak bisa diubah?", a: "const", opt: ["var", "let", "const", "fix"] },
        { lang: 'js', q: "Operator logika 'DAN'?", a: "&&", opt: ["&", "&&", "||", "AND"] },
        { lang: 'js', q: "Cara membuat fungsi?", a: "function myF()", opt: ["function myF()", "def myF()", "create myF()", "func myF()"] },
        { lang: 'js', q: "DOM singkatan dari?", a: "Document Object Model", opt: ["Document Object Model", "Data Object Model", "Disk Operating Method", "Digital Ordinance Model"] },
        { lang: 'js', q: "Method untuk menambah data ke array?", a: "push()", opt: ["add()", "push()", "insert()", "append()"] },
        { lang: 'js', q: "console.log(typeof [])?", a: "object", opt: ["array", "list", "object", "undefined"] },
        { lang: 'js', q: "NaN artinya?", a: "Not a Number", opt: ["Null and Null", "Not a Number", "New a Number", "None"] },
        { lang: 'js', q: "Looping: for, while, dan...?", a: "do...while", opt: ["if...else", "do...while", "foreach", "repeat"] },
        { lang: 'js', q: "Event saat elemen diklik?", a: "onclick", opt: ["onmouse", "onclick", "onpress", "ontouch"] },

        // Python (NEW)
        { lang: 'python', q: "Fungsi untuk menampilkan teks?", a: "print()", opt: ["echo()", "console.log()", "print()", "System.out.println()"] },
        { lang: 'python', q: "Tipe data list menggunakan tanda?", a: "[]", opt: ["{}", "[]", "()", "<>"] },
        { lang: 'python', q: "Kata kunci untuk membuat fungsi?", a: "def", opt: ["function", "void", "def", "fun"] },
        { lang: 'python', q: "Operator pemangkatan?", a: "**", opt: ["^", "**", "pow", "//"] },
        { lang: 'python', q: "Komentar satu baris menggunakan?", a: "#", opt: ["//", "#", "<!--", "--"] },
        { lang: 'python', q: "Tipe data dictionary berupa?", a: "Key-Value", opt: ["Index-Value", "Key-Value", "List-List", "Array"] },
        { lang: 'python', q: "Blok kode ditandai dengan?", a: "Indentasi", opt: ["Kurung kurawal", "Titik koma", "Indentasi", "End"] },
        { lang: 'python', q: "Looping range(3) menghasilkan?", a: "0, 1, 2", opt: ["1, 2, 3", "0, 1, 2", "0, 1, 2, 3", "1, 2"] },
        { lang: 'python', q: "Library populer untuk Data Science?", a: "Pandas", opt: ["Pandas", "React", "Laravel", "Spring"] },
        { lang: 'python', q: "Cara cek panjang list?", a: "len()", opt: ["length()", "size()", "count()", "len()"] },

        // Java (NEW)
        { lang: 'java', q: "Titik utama program Java?", a: "main method", opt: ["start function", "main method", "init block", "top level"] },
        { lang: 'java', q: "Tipe data untuk angka bulat?", a: "int", opt: ["float", "int", "boolean", "char"] },
        { lang: 'java', q: "Setiap statement diakhiri dengan?", a: ";", opt: [":", ";", ".", ","] },
        { lang: 'java', q: "Wadah untuk mencetak teks?", a: "System.out.println", opt: ["console.log", "print", "echo", "System.out.println"] },
        { lang: 'java', q: "Kata kunci untuk pewarisan?", a: "extends", opt: ["implements", "extends", "inherits", "super"] },
        { lang: 'java', q: "Access modifier untuk umum?", a: "public", opt: ["private", "public", "protected", "friend"] },
        { lang: 'java', q: "Membuat objek baru menggunakan?", a: "new", opt: ["create", "make", "new", "obj"] },
        { lang: 'java', q: "Tipe data benar/salah?", a: "boolean", opt: ["bool", "boolean", "bit", "logic"] },
        { lang: 'java', q: "Array dimulai dari indeks?", a: "0", opt: ["1", "0", "-1", "bebas"] },
        { lang: 'java', q: "Java berjalan di atas?", a: "JVM", opt: ["Browser", "JVM", "Python", "V8 Engine"] }
    ],
    logo: [
        { lang: 'html', icon: "fa-html5", name: "HTML5", opt: ["HTML5", "W3C", "Web", "Markups"] },
        { lang: 'css', icon: "fa-css3-alt", name: "CSS3", opt: ["Stylus", "CSS3", "SASS", "Less"] },
        { lang: 'js', icon: "fa-js", name: "JavaScript", opt: ["Java", "JavaScript", "TypeScript", "NodeJS"] },
        { lang: 'js', icon: "fa-react", name: "React", opt: ["Angular", "Vue", "React", "NextJS"] },
        { lang: 'js', icon: "fa-angular", name: "Angular", opt: ["React", "Angular", "Vue", "Ember"] },
        { lang: 'js', icon: "fa-vuejs", name: "Vue.js", opt: ["React", "Angular", "Vue.js", "Nuxt"] },
        { lang: 'js', icon: "fa-node", name: "Node.js", opt: ["Deno", "Node.js", "Express", "Python"] },
        { lang: 'python', icon: "fa-python", name: "Python", opt: ["Cobra", "Python", "Ruby", "Perl"] },
        { lang: 'java', icon: "fa-java", name: "Java", opt: ["C#", "Kotlin", "Java", "Scala"] },
        { lang: 'other', icon: "fa-php", name: "PHP", opt: ["HTML", "PHP", "SQL", "Perl"] },
        { lang: 'other', icon: "fa-docker", name: "Docker", opt: ["Kubernetes", "Docker", "Whale", "Container"] },
        { lang: 'other', icon: "fa-github", name: "GitHub", opt: ["GitLab", "GitHub", "BitBucket", "Git"] },
        { lang: 'java', icon: "fa-android", name: "Android", opt: ["iOS", "Android", "Linux", "Symbian"] }, // Android uses Java/Kotlin
        { lang: 'other', icon: "fa-apple", name: "Apple", opt: ["Windows", "Linux", "Apple", "Unix"] },
        { lang: 'other', icon: "fa-windows", name: "Windows", opt: ["Mac", "Linux", "Windows", "OSX"] },
        { lang: 'other', icon: "fa-linux", name: "Linux", opt: ["Ubuntu", "Linux", "RedHat", "Debian"] },
        { lang: 'other', icon: "fa-wordpress", name: "WordPress", opt: ["Joomla", "Drupal", "WordPress", "Wix"] },
        { lang: 'css', icon: "fa-bootstrap", name: "Bootstrap", opt: ["Tailwind", "Bootstrap", "Bulma", "Material"] },
        { lang: 'css', icon: "fa-sass", name: "SASS", opt: ["CSS", "LESS", "SASS", "Stylus"] },
        { lang: 'js', icon: "fa-npm", name: "NPM", opt: ["Yarn", "NPM", "PNPM", "Node"] }
    ],
    syntax: [
        // JavaScript
        { lang: 'js', q: "Cetak 'Halo' ke layar (JS)", a: "console.log('Halo')", hint: "Gunakan console.log" },
        { lang: 'js', q: "Deklarasi variabel umur = 20 (JS)", a: "let umur = 20", hint: "Gunakan let" },
        { lang: 'js', q: "Buat konstan PI = 3.14 (JS)", a: "const PI = 3.14", hint: "Gunakan const" },
        { lang: 'js', q: "Alert pesan 'Hai' (JS)", a: "alert('Hai')", hint: "Fungsi alert()" },
        { lang: 'js', q: "Komentar satu baris (JS)", a: "// komentar", hint: "Dua garis miring" },
        { lang: 'js', q: "Loop for dasar (JS)", a: "for(let i=0; i<5; i++)", hint: "for(init; cond; inc)" },

        // HTML
        { lang: 'html', q: "Tulis tag pembuka HTML", a: "<html>", hint: "Tag root" },
        { lang: 'html', q: "Tulis tag penutup body", a: "</body>", hint: "Ada slash /" },
        { lang: 'html', q: "Tag gambar dengan src='img.jpg'", a: "<img src='img.jpg'>", hint: "Self-closing tag" },

        // CSS
        { lang: 'css', q: "Selector ID 'main'", a: "#main", hint: "Pakai tanda pagar" },
        { lang: 'css', q: "Selector Class 'box'", a: ".box", hint: "Pakai titik" },
        { lang: 'css', q: "Set warna teks merah", a: "color: red", hint: "Property color" },

        // Python
        { lang: 'python', q: "Cetak 'Hello' (Python)", a: "print('Hello')", hint: "print(...)" },
        { lang: 'python', q: "Buat list kosong", a: "my_list = []", hint: "Pakai kurung siku" },
        { lang: 'python', q: "Kondisi jika x > 5", a: "if x > 5:", hint: "Diakhiri titik dua" },
        { lang: 'python', q: "Definisi fungsi 'test'", a: "def test():", hint: "Pakai def" },
        { lang: 'python', q: "Import modul math", a: "import math", hint: "keyword import" },

        // Java
        { lang: 'java', q: "Cetak 'Hi' (Java)", a: "System.out.println('Hi')", hint: "System.out... dan titik koma" },
        { lang: 'java', q: "Deklarasi int x = 10", a: "int x = 10;", hint: "Pakai tipe data dan titik koma" },
        { lang: 'java', q: "Main method signature", a: "public static void main(String[] args)", hint: "psvm" },
        { lang: 'java', q: "Buat objek String s", a: "String s = new String();", hint: "Gunakan new" }
    ]
};
