<<<<<<< HEAD
# Introducción



## 1. ¿Que es NodeJS?

   > [Node.js](https://nodejs.org/) es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación [ECMAScript](http://es6-features.org/), asíncrono, con I/O de datos en una arquitectura orientada a eventos y basado en el motor [V8 de Google](https://v8.dev/).

    Ryan Dahl el 8 de noviembre del 2009 presenta en el [JSConf.EU NodeJS](https://www.youtube.com/watch?v=ztspvPYybIY) a la comunidad Javascript, donde explico el porque era necesario la creación de algo como nodejs, en resumen nos explica que debido a su frustración en el desarrollo de aplicaciones que hicieran uso de la denominada concurrencia, es decir, la habilidad de hacer múltiples tareas al mismo tiempo, que en la mayoría de los casos era necesario el uso de varios lenguajes y/o sistemas para lograr dicho cometido, siendo muy diferentes entre si, disminuyendo la calidad final del producto en si.
    
    Dahl buscaba lograr crear un sistema que hiciera posible que la construcción de productos fuera rápido, sencillo y eficaz. Al mismo tiempo que Ryan Dahl exploraba esto problemas entraban en escena compañías que cambiaron y definieron el desarrollo de software, como: Apple, Google, Facebook, etc... Las cuales invierten grandes cantidades en el desarrollo web, especialmente el gigante de la búsqueda, Google, la cual para garantizar la eficiencia de sus productos estrellas crea el motor V8, interprete detrás de muchos productos relacionados con Javascript, incluyendo a Chrome.
    
    El motor V8 esta diseñado para la interpretación y compilación de lenguaje javascript, siendo este altamente eficiente y rápido. Ryan deicidio usar este para la construcción de NodeJS. Resumiendo NodeJS en su núcleo es un entorno de ejecución para javascript del lado del servidor dirigido a eventos haciendo.

## 2. Donde Usar NodeJS

    NodeJS es un framework de programación, siendo el único imitador para su uso nuestra imaginación. Podemos crear desde pequeños scripts para la manipulación de sistemas de archivos en cualquier entorno independientemente del sistema operativo, e incluso pòdemos desarrollar completas aplicaciones con complejos procesos de negocio a gran escala, pero como se diseño es especialmente útil para sistemas de alta concurrencia como servidores de mensajería, juegos multijugador o cualquier sistema de ejecucíon en tiempo real.
    
    Algunas compañías que ya usan NodeJS son: Uber servicio de taxis, Netflix popular sistemas de striming de video, LinkeIng red social profecional, ect...

##  3. Instalación y uso de nvm

    Las nuevas releases  de Node.js se sacan de la rama master de [GitHub](https://es.wikipedia.org/wiki/GitHub) cada seis meses. Las versiones pares se sacan en abril, y las impares en octubre. Cuando se libera una versión impar, la versión par anterior pasa a soporte a largo plazo (Long Term Support, LTS), que da a la versión un soporte activo de 18 meses desde la fecha de inicio de la LTS. Después de estos 18 meses, la versión recibe otros 12 meses de soporte de mantenimiento. Una versión activa recibirá los cambios compatibles unas pocas semanas después de que aterricen en la versión estable actual. Una versión de mantenimiento recibirá sólo actualizaciones críticas y de documentación.

| Release | Nombre  | Fecha release |  Estado LTS   |   Inicio LTS    |                     Inicio mantenimiento                     | Fin mantenimiento |
| :-----: | :-----: | :-----------: | :-----------: | :-------------: | :----------------------------------------------------------: | :---------------: |
| v0.10.x |         |  2013-03-11   |  Sin soporte  |        -        |                          2015-10-01                          |    2016-10-31     |
| v0.12.x |         |  2015-02-06   |  Sin soporte  |        -        |                          2016-04-01                          |    2016-12-31     |
|   4.x   |  Argon  |  2015-09-08   |  Sin soporte  |   2015-10-01    |                          2017-04-01                          |    2018-04-30     |
|   5.x   |         |  2015-10-29   |    No LTS     |       N/D       |                          2016-06-30                          |                   |
|   6.x   |  Boron  |  2016-04-26   | Mantenimiento |   2016-10-18    |                          2018-04-30                          |   Abril de 2019   |
|   7.x   |         |  2016-10-25   |    No LTS     |       N/D       |                          2017-06-30                          |                   |
|   8.x   | Carbon  |  2017-05-30   | Mantenimiento |   2017-10-31    | 2019-01-01[13](https://es.wikipedia.org/wiki/Node.js#cite_note-13) | Diciembre de 2019 |
|   9.x   |         |  2017-10-01   |    No LTS     |       N/D       |                          2018-06-30                          |                   |
|  10.x   | Dubnium |  2018-04-24   |  **Activo**   | Octubre de 2018 |                        Abril de 2020                         |   Abril de 2021   |
|  11.X   |         |  2018-10-23   |    No LTS     |       N/D       |                        Junio de 2019                         |                   |
|  12.X   |         |  2019-04-23   |   Pendiente   | Octubre de 2019 |                        Abril de 2021                         |   Abril de 2022   |

    En ocasiones cuando desarrollemos con noode puede que atendamos a varios proyectos que usan distintas versiones de este, provocando que saltemos de una instalación a otra. Dándole solución a este problema tenemos una gran herramienta para el desarrollo con este framework, [NVM](https://github.com/nvm-sh/nvm), el cual es un proyecto de código abierto alojado en Github. El cual con unas cuantas líneas de comando podremos tener instalado varias versiones de node en nuestro ordenador.

#### Instalación de NVM en sistemas Windows

Instalar NVM en sistemas windows es bastante sencillo, solo tienes que descargar el ejecutables que se encarga de instalar y configuar el proyecto en tu equipo, puedes hacerlo desde [aquí](https://github.com/coreybutler/nvm-windows/releases), para más información visite el proyecto oficial [aqui](https://github.com/coreybutler/nvm-windows).

#### Instalación de NVM en sistemas Linux y MacOS

Para instalar NVM en sistemas Linux puedes usar los siguientes scripts: 

   ```nginx
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
   ```



O puedes usar Wget:

   ```nginx
   wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
   ```

**Nota:** Si la variable de entorno $ XDG_CONFIG_HOME está presente, colocará los archivos nvm allí.

   ```nginx
   export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
   [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
   ```

#### Usando NVM

Si usamos en la terminal la sentencia `nvm` veremos la ayuda que nos brinda el mismo administrador de paquetes:

```nginx
$ nvm

Node Version Manager

Note: <version> refers to any version-like string nvm understands. This includes:

- full or partial version numbers, starting with an optional "v" (0.10, v0.1.2, v1)
- default (built-in) aliases: node, stable, unstable, iojs, system
- custom aliases you define with `nvm alias foo`

 Any options that produce colorized output should respect the `--no-colors` option.

Usage:
  nvm --help                                Show this message
  nvm --version                             Print out the installed version of nvm
  nvm install [-s] <version>                Download and install a <version>, [-s] from source. Uses .nvmrc if available
    --reinstall-packages-from=<version>     When installing, reinstall packages installed in <node|iojs|node version number>
    --lts                                   When installing, only select from LTS (long-term support) versions
    --lts=<LTS name>                        When installing, only select from versions for a specific LTS line
    --skip-default-packages                 When installing, skip the default-packages file if it exists
    --latest-npm                            After installing, attempt to upgrade to the latest working npm on the given node version
    --no-progress                           Disable the progress bar on any downloads
  nvm uninstall <version>                   Uninstall a version
  nvm uninstall --lts                       Uninstall using automatic LTS (long-term support) alias `lts/*`, if available.
  nvm uninstall --lts=<LTS name>            Uninstall using automatic alias for provided LTS line, if available.
  nvm use [--silent] <version>              Modify PATH to use <version>. Uses .nvmrc if available
    --lts                                   Uses automatic LTS (long-term support) alias `lts/*`, if available.
    --lts=<LTS name>                        Uses automatic alias for provided LTS line, if available.
  nvm exec [--silent] <version> [<command>] Run <command> on <version>. Uses .nvmrc if available
    --lts                                   Uses automatic LTS (long-term support) alias `lts/*`, if available.
    --lts=<LTS name>                        Uses automatic alias for provided LTS line, if available.
  nvm run [--silent] <version> [<args>]     Run `node` on <version> with <args> as arguments. Uses .nvmrc if available
    --lts                                   Uses automatic LTS (long-term support) alias `lts/*`, if available.
    --lts=<LTS name>                        Uses automatic alias for provided LTS line, if available.
  nvm current                               Display currently activated version of Node
  nvm ls                                    List installed versions
  nvm ls <version>                          List versions matching a given <version>
  nvm ls-remote                             List remote versions available for install
    --lts                                   When listing, only show LTS (long-term support) versions
  nvm ls-remote <version>                   List remote versions available for install, matching a given <version>
    --lts                                   When listing, only show LTS (long-term support) versions
    --lts=<LTS name>                        When listing, only show versions for a specific LTS line
  nvm version <version>                     Resolve the given description to a single local version
  nvm version-remote <version>              Resolve the given description to a single remote version
    --lts                                   When listing, only select from LTS (long-term support) versions
    --lts=<LTS name>                        When listing, only select from versions for a specific LTS line
  nvm deactivate                            Undo effects of `nvm` on current shell
  nvm alias [<pattern>]                     Show all aliases beginning with <pattern>
  nvm alias <name> <version>                Set an alias named <name> pointing to <version>
  nvm unalias <name>                        Deletes the alias named <name>
  nvm install-latest-npm                    Attempt to upgrade to the latest working `npm` on the current node version
  nvm reinstall-packages <version>          Reinstall global `npm` packages contained in <version> to current version
  nvm unload                                Unload `nvm` from shell
  nvm which [current | <version>]           Display path to installed node version. Uses .nvmrc if available
  nvm cache dir                             Display path to the cache directory for nvm
  nvm cache clear                           Empty cache directory for nvm

Example:
  nvm install 8.0.0                     Install a specific version number
  nvm use 8.0                           Use the latest available 8.0.x release
  nvm run 6.10.3 app.js                 Run app.js using node 6.10.3
  nvm exec 4.8.3 node app.js            Run `node app.js` with the PATH pointing to node 4.8.3
  nvm alias default 8.1.0               Set default node version on a shell
  nvm alias default node                Always default to the latest available node version on a shell

Note:
  to remove, delete, or uninstall nvm - just remove the `$NVM_DIR` folder (usually `~/.nvm`)
```

### Node.js Console - REPL

Node.js viene con un entorno virtual llamado REPL (también conocido como Node shell). REPL significa Read-Eval-Print-Loop. Es una forma rápida y fácil de probar el código simple Node.js / JavaScript.

Para iniciar REPL (Node shell), abra el símbolo del sistema (en Windows) o terminal (en Mac o UNIX / Linux) y escriba node como se muestra a continuación. Cambiará la solicitud a> en Windows y MAC.

```ngix
C:\> node
> _
```
