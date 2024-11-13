## Baslangic ##
git init 
bu komut projeye git'i dahil ediyor, bu komut yazilmadan projede git config dosyalari olusmaz
## Konfigurasyonlar ##

```js
git config --global --list 
```

bu komut email ve username bilgilerimizin kayitli olup olmadigini gosterir
email eklemek icin 

```js
git config --global user.email user@email.com
```
username eklemek icin 


```js
git config --global user.name username
```

<!--  -->
dosyalari gonderme kanalina alir
```
git add . 
```

dosyalari mesajlandirip hazir hale getirir
```js
git commit -m "mesaj alani"
```

repo olusturulduktan sonra asagidaki komut calisitirilir, repo_url github'da olusturulan projeden alinmali
```js
git remote add origin repo_url

```
ornek 

```js
git remote add origin https://github.com/cihanbas/gitDersleri3
``` 

commit ile gonderilen kodlar artik repoya gonderilebilir
```js
git push -u origin main
```

branch degistirmek icin 
git checkout branch_adi

aktif branch'de ki degisiklikleri almak icin 
git pull 
aktif branchleri almak icin
git fetch 

git checkout -b new_branch