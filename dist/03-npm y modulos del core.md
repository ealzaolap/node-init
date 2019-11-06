# NPM y Modulos del  core #

## NPM

Node Package Manager o simplemente npm es un gestor de paquetes, el cual hará más fáciles nuestras vidas al momento de trabajar con Node, ya que gracias a él podremos tener cualquier librería disponible con solo una línea de código.  NPM nos ayudará a administrar nuestros módulos, distribuir paquetes y agregar dependencias de una manera sencilla.

NPM nos provee de dos principales funcionalidades:

* Repositorios online para aplicaciones paquetes/módulos los cuales pueden ser buscados en [www.npmjs.com](https://www.npmjs.com) 
* Utilidades para instalar, hacer versiones y manejo de dependencias de paquetes de nodejs, en líneas de comandos.

Viene junto a node desde la versión [v0.6.3](https://nodejs.org/dist/v0.6.3/docs/api/). Para verificar que contamos con el en nuestro sistema operativo ejecute la siguiente línea de comando en su consola:

```bash
npm --version
6.11.3
```

Para actualizar a la ultima versión de npm en nuestro ordenador se utiliza el siguiente comando:

```bash
npm install npm -g
/home/ealzaolap/.nvm/versions/node/v10.16.3/bin/npx -> /home/ealzaolap/.nvm/versions/node/v10.16.3/lib/node_modules/npm/bin/npx-cli.js
/home/ealzaolap/.nvm/versions/node/v10.16.3/bin/npm -> /home/ealzaolap/.nvm/versions/node/v10.16.3/lib/node_modules/npm/bin/npm-cli.js
+ npm@6.12.0
added 1 package from 1 contributor, removed 1 package and updated 11 packages in 51.209s
```

### Instalar módulos usando npm

La sintaxis para instalar cualquier módulo en node es muy sencilla:

```bash
npm install <nombre-módulo>
```

Por ejemplo si queremos instalar el microframework [ExpressJS](https://expressjs.com/):

```bash
npm install express
+ express@4.17.1
added 50 packages from 37 contributors and audited 126 packages in 4.999s
found 0 vulnerabilities
```

#### Global vs Local

De manera predeterminada, npm instala cualquier dependencia en el modo local. El modo local se refiere a la instalación del paquete en el directorio node_modules que se encuentra en la carpeta donde está presente la aplicación Node. Los paquetes implementados localmente son accesibles mediante el método `require()`. Por ejemplo, cuando instalamos el módulo express, se crea el directorio node_modules en el cual se incluye express.

Puedes usar `npm ls` para ver todos los módulos locales instalados:

 ```bash
npm ls 
nodejs-classes@0.0.1 /mnt/d/Proyectos/node-init
├─┬ eslint@6.3.0
│ ├─┬ @babel/code-frame@7.5.5
│ │ └─┬ @babel/highlight@7.5.0
│ │   ├── chalk@2.4.2 deduped
│ │   ├── esutils@2.0.3 deduped
│ │   └── js-tokens@4.0.0
│ ├─┬ ajv@6.10.2
│ │ ├── fast-deep-equal@2.0.1
│ │ ├── fast-json-stable-stringify@2.0.0
│ │ ├── json-schema-traverse@0.4.1
│ │ └─┬ uri-js@4.2.2
│ │   └── punycode@2.1.1
│ ├─┬ chalk@2.4.2
│ │ ├─┬ ansi-styles@3.2.1
│ │ │ └─┬ color-convert@1.9.3
│ │ │   └── color-name@1.1.3
│ │ ├── escape-string-regexp@1.0.5
│ │ └─┬ supports-color@5.5.0
│ │   └── has-flag@3.0.0
│ ├─┬ cross-spawn@6.0.5
│ │ ├── nice-try@1.0.5
│ │ ├── path-key@2.0.1
│ │ ├── semver@5.7.1
│ │ ├─┬ shebang-command@1.2.0
│ │ │ └── shebang-regex@1.0.0
│ │ └─┬ which@1.3.1
│ │   └── isexe@2.0.0
│ ├─┬ debug@4.1.1
│ │ └── ms@2.1.2
│ ├─┬ doctrine@3.0.0
│ │ └── esutils@2.0.3 deduped
│ ├─┬ eslint-scope@5.0.0
│ │ ├─┬ esrecurse@4.2.1
│ │ │ └── estraverse@4.3.0 deduped
│ │ └── estraverse@4.3.0
│ ├─┬ eslint-utils@1.4.2
│ │ └── eslint-visitor-keys@1.1.0 deduped
│ ├── eslint-visitor-keys@1.1.0
│ ├─┬ espree@6.1.1
│ │ ├── acorn@7.0.0
│ │ ├── acorn-jsx@5.0.2
│ │ └── eslint-visitor-keys@1.1.0 deduped
│ ├─┬ esquery@1.0.1
│ │ └── estraverse@4.3.0 deduped
│ ├── esutils@2.0.3
│ ├─┬ file-entry-cache@5.0.1
│ │ └─┬ flat-cache@2.0.1
│ │   ├── flatted@2.0.1
│ │   ├─┬ rimraf@2.6.3
│ │   │ └─┬ glob@7.1.4
│ │   │   ├── fs.realpath@1.0.0
│ │   │   ├─┬ inflight@1.0.6
│ │   │   │ ├── once@1.4.0 deduped
│ │   │   │ └── wrappy@1.0.2
│ │   │   ├── inherits@2.0.4
│ │   │   ├── minimatch@3.0.4 deduped
│ │   │   ├─┬ once@1.4.0
│ │   │   │ └── wrappy@1.0.2 deduped
│ │   │   └── path-is-absolute@1.0.1
│ │   └─┬ write@1.0.3
│ │     └── mkdirp@0.5.1 deduped
│ ├── functional-red-black-tree@1.0.1
│ ├─┬ glob-parent@5.0.0
│ │ └── is-glob@4.0.1 deduped
│ ├── globals@11.12.0
│ ├── ignore@4.0.6
│ ├─┬ import-fresh@3.1.0
│ │ ├─┬ parent-module@1.0.1
│ │ │ └── callsites@3.1.0
│ │ └── resolve-from@4.0.0
│ ├── imurmurhash@0.1.4
│ ├─┬ inquirer@6.5.2
│ │ ├── ansi-escapes@3.2.0
│ │ ├── chalk@2.4.2 deduped
│ │ ├─┬ cli-cursor@2.1.0
│ │ │ └─┬ restore-cursor@2.0.0
│ │ │   ├─┬ onetime@2.0.1
│ │ │   │ └── mimic-fn@1.2.0
│ │ │   └── signal-exit@3.0.2
│ │ ├── cli-width@2.2.0
│ │ ├─┬ external-editor@3.1.0
│ │ │ ├── chardet@0.7.0
│ │ │ ├─┬ iconv-lite@0.4.24
│ │ │ │ └── safer-buffer@2.1.2
│ │ │ └─┬ tmp@0.0.33
│ │ │   └── os-tmpdir@1.0.2
│ │ ├─┬ figures@2.0.0
│ │ │ └── escape-string-regexp@1.0.5 deduped
│ │ ├── lodash@4.17.15 deduped
│ │ ├── mute-stream@0.0.7
│ │ ├─┬ run-async@2.3.0
│ │ │ └── is-promise@2.1.0
│ │ ├─┬ rxjs@6.5.3
│ │ │ └── tslib@1.10.0
│ │ ├─┬ string-width@2.1.1
│ │ │ ├── is-fullwidth-code-point@2.0.0
│ │ │ └─┬ strip-ansi@4.0.0
│ │ │   └── ansi-regex@3.0.0
│ │ ├── strip-ansi@5.2.0 deduped
│ │ └── through@2.3.8
│ ├─┬ is-glob@4.0.1
│ │ └── is-extglob@2.1.1
│ ├─┬ js-yaml@3.13.1
│ │ ├─┬ argparse@1.0.10
│ │ │ └── sprintf-js@1.0.3
│ │ └── esprima@4.0.1
│ ├── json-stable-stringify-without-jsonify@1.0.1
│ ├─┬ levn@0.3.0
│ │ ├── prelude-ls@1.1.2
│ │ └─┬ type-check@0.3.2
│ │   └── prelude-ls@1.1.2 deduped
│ ├── lodash@4.17.15
│ ├─┬ minimatch@3.0.4
│ │ └─┬ brace-expansion@1.1.11
│ │   ├── balanced-match@1.0.0
│ │   └── concat-map@0.0.1
│ ├─┬ mkdirp@0.5.1
│ │ └── minimist@0.0.8
│ ├── natural-compare@1.4.0
│ ├─┬ optionator@0.8.2
│ │ ├── deep-is@0.1.3
│ │ ├── fast-levenshtein@2.0.6
│ │ ├── levn@0.3.0 deduped
│ │ ├── prelude-ls@1.1.2 deduped
│ │ ├── type-check@0.3.2 deduped
│ │ └── wordwrap@1.0.0
│ ├── progress@2.0.3
│ ├── regexpp@2.0.1
│ ├── semver@6.3.0
│ ├─┬ strip-ansi@5.2.0
│ │ └── ansi-regex@4.1.0
│ ├── strip-json-comments@3.0.1
│ ├─┬ table@5.4.6
│ │ ├── ajv@6.10.2 deduped
│ │ ├── lodash@4.17.15 deduped
│ │ ├─┬ slice-ansi@2.1.0
│ │ │ ├── ansi-styles@3.2.1 deduped
│ │ │ ├── astral-regex@1.0.0
│ │ │ └── is-fullwidth-code-point@2.0.0 deduped
│ │ └─┬ string-width@3.1.0
│ │   ├── emoji-regex@7.0.3
│ │   ├── is-fullwidth-code-point@2.0.0 deduped
│ │   └── strip-ansi@5.2.0 deduped
│ ├── text-table@0.2.0
│ └── v8-compile-cache@2.1.0
└── eslint-config-google@0.14.0
 ```

Los paquetes / dependencias instalados globalmente se almacenan en el directorio del sistema. Dichas dependencias se pueden usar en cualquier instancia CLI (interfaz de línea de comandos) de node, pero no se pueden importar usando `require ()` en la aplicación Node directamente. Ahora intentemos instalar el módulo express utilizando la instalación global.

```bash
npm install express -g
```

### package.json

Está presente en el directorio raíz de cualquier aplicación / módulo Node y se usa para definir las propiedades de un paquete.

#### Atributos de Package.json
**name** - nombre del paquete

**version** - versión del paquete

**description** - descripción del paquete

**homepage** - página de inicio del paquete

**author** - autor del paquete

**contributors** - nombre de los contribuyentes al paquete

**dependencies** - lista de dependencias. npm instala automáticamente todas las dependencias mencionadas aquí en la 						   carpeta node_module del paquete.

**repository** - tipo de repositorio y url del paquete

**main** - punto de entrada del paquete

**keywords** - palabras clave

### Desinstalar un módulo

Use el siguiente comando para desinstalar un módulo Node.js.

```bash
npm uninstall <nombre-paqute>
```


Una vez que npm desinstale el paquete, puede verificarlo mirando el contenido del directorio / node_modules / o escribiendo el siguiente comando:

```bash
npm ls
```

### Actualizar un módulo
Actualice package.json y cambie la versión de la dependencia que se actualizará y ejecute el siguiente comando.

```bash
npm update <nombre-paquete>
```

### Buscar un módulo
Busca el nombre del paquete usando npm.

```bash
npm search <nombre-paquete>
```

### Crear un módulo
La creación del módulo requiere que se genere un package.json. Generemos uno usando npm, que generará el esqueleto básico de package.json.

```bash
npm init
#Esta utilidad lo guiará a través de la creación de un archivo package.json.

#Solo cubre los elementos más comunes e intenta adivinar valores predeterminados.

#Consulte 'npm help json' para obtener documentación definitiva.

#Presione ^ C en cualquier momento para salir.
```


Deberá proporcionar toda la información requerida sobre su módulo. Puede obtener ayuda del archivo package.json mencionado anteriormente para comprender los significados de la información solicitada. Una vez que se genera package.json. Use el siguiente comando para registrarse en el sitio del repositorio npm utilizando una dirección de correo electrónico válida.

```bash
npm adduser
username: ealzaolap
password:
email: (this IS public) ealzaolap@gmail.com
```


Ahora es el momento de publicar su módulo:

```bash
npm publish
```


Si todo está bien con su módulo, se publicará en el repositorio y será accesible para instalar usando npm como cualquier otro módulo Node.js.

## Módulos del core

Hay varios módulos de utilidad disponibles en la biblioteca de módulos de Node.js. Estos módulos son muy comunes y se usan con frecuencia al desarrollar aplicaciones basadas en nodos.

1. [**OS Module**](https://nodejs.org/api/os.html): Proporciona funciones de utilidad relacionadas con el sistema operativo básico.
2. [**Path Module**](https://nodejs.org/api/path.html): Proporciona utilidades para manejar y transformar rutas de archivos.
3. [**Net Module**](https://nodejs.org/api/net.html) : Proporciona servidores y clientes como flujos. Actúa como un contenedor de red.
4. [**DNS Module**](https://nodejs.org/api/dns.html) : Proporciona funciones para realizar búsquedas DNS reales, así como para utilizar funcionalidades     subyacentes de resolución de nombres del sistema operativo.
5. [**Domain Module**](https://nodejs.org/api/domain.html) : Proporciona una forma de manejar múltiples operaciones de E / S diferentes como un solo grupo.

### Módulo Web

NodeJS proporciona un módulo http que puede usarse tanto para clientes como servidores web. A continuación veremos en detalle este módulo implementando un pequeño servidor que consulte a una api externa y nos sirva páginas webs.