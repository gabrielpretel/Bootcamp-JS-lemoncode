# Laboratorio Git - Gabriel Pretel

## Paso a paso del ejercicio

**Rama master**

1. He creado la carpeta "laboratorio-git-gabrielpretel" en local, la he abierto con Visual Studio Code y he inicializado git con "git init".

2. He creado un repositorio en GitHub con el mismo nombre de mi carpeta en local y he enlazado el repositorio local con el remoto con "git remote add origin git@github.com:gabrielpretel/laboratorio-git-gabrielpretel.git". Por último he comprobado la conexión con el comando "git remote -v"

3. He creado la carpeta src con un archivo llamado main.js al que le he incluido un console.log, un archivo index.html en la raíz y un archivo readme.md, el cual he rellenado con los pasos que llevo hasta el momento.

4. He añadido todos los cambios al stage con "git add .", he realizado el primer commit y he subido todo el proyecto a remoto con "git push --set-upstream origin master", creando la rama master.

<hr>

**Rama development**

5. He creado y he cambiado a la rama development con "git checkout -b development".

6. He actualizado el archivo readme.md con la nueva información de todos los pasos que he hecho.

7. He realizado un commit de los nuevos cambios con "git commit -am 'texto'" para añadir los cambios al stage y realizar el commit.

8. He realizado un push con "git push -u origin development", para subir los cambios a la nueva rama.

<hr>

**Merge de las dos ramas**

9. He cambiado a la rama master con "git checkout master" y las he mezclado con "git merge development -m 'texto'".

10. He actualizado el archivo readme.md con los nuevos pasos, he realizado el commit de esto y el push para subir los cambios a remoto.