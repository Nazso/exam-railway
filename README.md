# Indítás/Start the app

## Backend

cd \Locos-backend\

- npm start

## Frontend

cd \LocoAngular\

- ng s

# Mozdony ismertető alkalmazás

Eredeti szakmám segítették a témaválasztást a vizsgamunka elkészítéséhez. Az alkalmazás a magyar vasútvonalakon futott és futó mozdonyokról ad egy rövid áttekintést a teljesség igénye nélkül. A mozdonyok műszaki adatainak bemutatása és rövid történeti ismertetése mellett a regisztrált és bejelentkezett felhasználó 3 féle méretben modelleket vásárolhat a kiválasztott típusból, valamint kommentekkel visszajelzéseket adhat, véleményt formálhat, illetve kiegészítésekkel bővítheti az ismereteket.

# Felhasználói adatok belépéshez

## Regisztráció

- A felhasználónév csak kis- és nagybetű lehet ékezet nélkül és szám 5-15 karakter hosszúságban
- Email validáció működik
- A jelszó csak kis- és nagybetű lehet ékezet nélkül és szám 4-15 karakter hosszúságban

## Felhasználó 'user' szereppel/Simple 'user' role:

- username: Zsolt
- password: teszt

## Felhasználó 'admin' szereppel/User with 'admin' role:

- username: YodaOne
- password: teszt

# Belépés

## Backend

cd \Locos-backend\

- npm run docker:build
- npm run docker:run

cd \LocoAngular\

- ng s

# Entitások

## Felhasználók

Egy látogató, aki regisztrálhat, bejelentkezhet, a mozdonyok részleteit megtekintheti, modelleket vásárolhat, kommenteket írhat, valamint mások kommentjeit olvashatja.

## Dízel mozdonyok

Dízel üzemű vontató járművek, amelyek megtekinthetőek listában és részletesen is.

## Villamos mozdonyok

Villamos üzemű vontató járművek, amelyek megtekinthetőek listában és részletesen is.

## Kommentek

A regisztrált és bejelentkezett felhasználók véleményei, észrevételei és kiegészítései.

## Modell vásárlás

A regisztrált és bejelentkezett felhasználók a kiválasztott mozdony típusból 3 féle méretben vásárolhatnak modelleket.

# User story lista, feladatok

A felhasználó regisztrál és belép az alkalmazásba

- Regisztrációs képernyő megvalósítása
- regisztrációs végpont implementálása
- Login képernyő megvalósítása
- login végpont implementálása
- JWT autentikáció implementáció, kliens oldali hozzáférés szabályozása autentikáció alapján
- A felhasználó jegyet vásárol

Dízel vagy villamos üzemű mozdony kiválasztása, részletek

- Főoldalról a két mozdonyfajta kiválasztása (képre, feliratra kattintva vagy navigációs menüvel)
- Két aloldalon a villamos és a dízel üzemű mozdonyok kilistázása (GET/electric és GET/diesel)
- A listában szereplő kártyákon megjelenő gombra kattintva a kiválasztott mozdony részleteinek megtekintése (GET/electric/:id és GET/diesel/:id)

Komment írása, olvasása

- A mozdonyt részletező oldalról lehet új komment írást kezdeményezni
- A form-ban a bejelentkezett felhasználó és a kiválasztott mozdony szükséges adatai betöltődnek
- A betöltött adatok nem módosíthatók (readonly)
- A komment form mezőit kitöltve van lehetőség új komment mentésére (POST/comments)
- Az aktuális mozdonytípusnál megjelenik a mentett komment (GET/comments)
- A komment lsitában a "Részletek" gombra kattintva elolvasható a komment tartalma(GET/comments/:id)
- A listából az Admin oldalon 'admin' szereppel rendelkező felhasználó törölheti az elemeket (DELETE/comments/:id)

Modell vásárlás

- A mozdonyt részletező oldalról lehet új vásárlást kezdeményezni
- A form-ban a bejelentkezett felhasználó és a kiválasztott mozdony szükséges adatai betöltődnek
- A betöltött adatok nem módosíthatók (readonly)
- Az input mezők kitöltése után rögzíthető a vásárlás (POST/buyItems)
- Az Admin oldalon 'admin' szereppel rendelkező felhasználó megtekintheti a kilistázott tételeket (GET/buyItems)

# Képernyők

## Regisztráció

A felhasználó létrehozhatja a felhasználói fiókját felhasználónév, e-mail, jelszó megadásával.

## Bejelentkezés

A felhasználó bejelentkezhet felhasználónév és jelszó megadásával.

## Főoldal

Két fotó jelenik meg egy-egy dízel és villamos üzemű mozdonyról. A képre vagy az alatta levő feliratra kattintva lehet továbblépni a mozdonyok kilistázásához.

## Mozdonyok listázása

A főoldalon kiválasztott mozdony fajtának az egyes típusai jelennek meg kártyákon. Az ott megjelenő gombokkal lehet megtekinteni a részleteket.

## Mozdonyok részletes megtekintése

A regisztrált és bejelentkezett felhasználók itt tekinthetik meg a mozdony részletes adatait, továbbá innét van lehetőség modell vásárlásra és a komment formra történő navigálásra.

## Komment form

A regisztrált és bejelentkezett felhasználók az itt megjelenő form-on írhatnak új kommentet.

## Admin oldal

A regisztrált, bejelentkezett, 'admin' szereppel rendelkező felhasználó itt megtekintheti a felhasználók, bevásárlások és kommentek listáját. A kommentek közül lehetőség van törlésre.

# API végpontok

| Végpont            | funkció                             |
| :----------------- | :---------------------------------- |
| POST/login         | felhasználó bejelentkezés           |
| POST/refresh       | bejelentkezés fenntartása           |
| POST/logout        | felhasználó kijelentkezés           |
| GET/diesel         | dízel mozdonyok kilistázása         |
| GET/diesel/:id     | egy mozdony típus lekérdezése       |
| GET/electric       | villamos mozdony kilistázása        |
| GET/electric/:id   | egy mozdony típus lekérdezése       |
| POST/comment       | új komment mentése                  |
| GET/comment        | kommentek listázása                 |
| GET/comment/:id    | egy komment megjelenítése           |
| DELETE/comment/:id | komment törlése                     |
| POST/buyItem       | vásárlás mentése                    |
| GET/buyItem        | vásárlások lekérdezése              |
| POST/user          | felhasználók mentése (regisztráció) |
| GET/user           | felhasználók listázása              |

"# Railway-project"
