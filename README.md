Módulo 2 - Turma 25 - Hightech Cursos - 2019

Modificando arquivo readme para teste.

COMO ENVIAR, CRIAR E SUBIR UM ARQUIVO GIT:

Usuario@Admin MINGW64 ~
$ git --version
git version 2.22.0.windows.1

Usuario@Admin MINGW64 ~
$ pwd
/c/Users/Usuario

Usuario@Admin MINGW64 ~
$ ls
 1/
'3D Objects'/
'Ambiente de Impressão'@
'Ambiente de Rede'@
 AndroidStudioProjects/
 AppData/
'Application Data'/
'Configurações Locais'@
 Contacts/
 Cookies@
'Dados de Aplicativos'@
 Desktop/
 Documents/
 Downloads/
 edb_psqlodbc.exe*
 edb_psqlodbc.exe-20170919213452*
 Favorites/
 hsperfdata_Usuario/
 IntelGraphicsProfiles/
 Links/
'Menu Iniciar'@
'Meus Documentos'@
 MicrosoftEdgeBackups/
 Modelos@
 Music/
 NTUSER.DAT
 ntuser.dat.LOG1
 ntuser.dat.LOG2
 NTUSER.DAT{1052bc03-51db-11e9-8bed-d308fea7049a}.TM.blf
 NTUSER.DAT{1052bc03-51db-11e9-8bed-d308fea7049a}.TMContainer00000000000000000001.regtrans-ms
 NTUSER.DAT{1052bc03-51db-11e9-8bed-d308fea7049a}.TMContainer00000000000000000002.regtrans-ms
 ntuser.ini
 OneDrive/
 Pictures/
 README.md
 Recent@
'Saved Games'/
 Searches/
 SendTo@
 Videos/
'VirtualBox VMs'/
 workspace/

Usuario@Admin MINGW64 ~
$ cd Documents

Usuario@Admin MINGW64 ~/Documents
$ ls
'~$lho augusto (Salvo Automaticamente).docx'                                            'filho augusto (Salvo Automaticamente).docx'
'~$lho augusto.docx'                                                                    'filho augusto.docx'
'~WRL3081.tmp'                                                                          'filho augusto.zip'
'~WRL3427.tmp'                                                                          'filho augusto-1.jpg'
 1521753283Planilha_de_Controle_de_Gastos_-_Autnomos.xlsx                               'GIT VINICIUS'/
 157_1515676503_2018.pdf                                                                 GitProjetos/
'160_1515676693_2018 (1).pdf'                                                           'Hightech 2019'/
 160_1515676693_2018.pdf                                                                'HORARIO DA BB.docx'
 165_1515676943_2018.pdf                                                                 Image-Line/
'Apostila Alg.pdf'                                                                      'Itens dofus.txt'
 apostila_java_android.pdf                                                              'League of Legends'/
 apostila_javaoo_2.0.pdf                                                                'Links de estudos.docx'
 Apple.txt                                                                              'materia formatura 68 anos PE s foto.docx'
'Arquivos do Outlook'/                                                                  'materia formatura 68 anos PE.docx'
'Boletos Hightech'/                                                                     'materia formatura 68 anos PE.pdf'
'Cirurgico cuidados pós morte do paciente cirurgico.pptx [Salvo automaticamente].pptx'  'Meus Vídeos'@
 colecoes-20170811T005019Z-001.zip                                                      'Minhas Imagens'@
'Configuração Notebook.docx'                                                            'Minhas Músicas'@
'Conta Dofus -.txt'                                                                      modelo_de_curriculo_senac.doc
 Contas/                                                                                'Modelos Personalizados do Office'/
 cptm_abertura_cp0032017.pdf                                                             NetBeansProjects/
'Curriculo_Bruno senac correto.doc'                                                      org.eclipse.jdt.core.prefs
 Depois-do-E.-Médio.pptx                                                                 Paypal.txt
 desktop.ini                                                                             Portal-de-Negócios-da-Habitação.pdf
'Duvidas Hightech.txt'                                                                   ProgramaPrincipal.class
 ediario_20190603072816.pdf                                                              Projeto/
 edital_progep_2017_056.pdf                                                              ProjetoWeb.zip
 edital_progep_2017_057.pdf                                                             'QSCON 2018.pdf'
 edital_progep_2017_058.pdf                                                              Secret/
 edital_progep_2017_059.pdf                                                             'slides financeiro att 2.pptx'
 edital_progep_2017_083.pdf                                                             'slides financeiro att.pptx'
 edital_prograd_2017_006.pdf                                                             SubirProjetoGit.rtf
 exercicio_aula15.pdf                                                                   'Suporte ankama.txt'
 Faculdade/                                                                             'trabalho de matematica.docx'
'Faculdade caca'/                                                                       'TRE_MS • Comprovante de agendamento de atendimento.html'
 FDBWeb2T16/                                                                            'TRE_MS • Comprovante de agendamento de atendimento_files'/
'figuras faltantes álbum copa.pdf'                                                       vlc-media-player-2-2-6.exe*

Usuario@Admin MINGW64 ~/Documents
$ cd GitProjetos

Usuario@Admin MINGW64 ~/Documents/GitProjetos
$ ls
'Hightech 2019'/

Usuario@Admin MINGW64 ~/Documents/GitProjetos
$ cd GitProjetos
bash: cd: GitProjetos: No such file or directory

Usuario@Admin MINGW64 ~/Documents/GitProjetos
$ cd Hightech 2019
bash: cd: too many arguments

Usuario@Admin MINGW64 ~/Documents/GitProjetos
$ cd Hightech 2019
bash: cd: too many arguments

Usuario@Admin MINGW64 ~/Documents/GitProjetos
$ ls
'Hightech 2019'/

Usuario@Admin MINGW64 ~/Documents/GitProjetos
$ cd Hightech
bash: cd: Hightech: No such file or directory

Usuario@Admin MINGW64 ~/Documents/GitProjetos
$ cd Hightech 2019
bash: cd: too many arguments

Usuario@Admin MINGW64 ~/Documents/GitProjetos
$ ls
'Hightech 2019'/

Usuario@Admin MINGW64 ~/Documents/GitProjetos
$ cd Hightech 2019
bash: cd: too many arguments

Usuario@Admin MINGW64 ~/Documents/GitProjetos
$ ls
'Hightech 2019'/

Usuario@Admin MINGW64 ~/Documents/GitProjetos
$ cd Hightech\ 2019/

Usuario@Admin MINGW64 ~/Documents/GitProjetos/Hightech 2019
$ ls
README.md

Usuario@Admin MINGW64 ~/Documents/GitProjetos/Hightech 2019
$ git config --list
core.symlinks=false
core.autocrlf=true
core.fscache=true
color.diff=auto
color.status=auto
color.branch=auto
color.interactive=true
help.format=html
rebase.autosquash=true
http.sslcainfo=C:/Program Files/Git/mingw64/ssl/certs/ca-bundle.crt
http.sslbackend=openssl
diff.astextplain.textconv=astextplain
filter.lfs.clean=git-lfs clean -- %f
filter.lfs.smudge=git-lfs smudge -- %f
filter.lfs.process=git-lfs filter-process
filter.lfs.required=true
credential.helper=manager
user.name=bruzoca
user.email=brunoariasrocha@hotmail.com

Usuario@Admin MINGW64 ~/Documents/GitProjetos/Hightech 2019
$ git config --global user.name "bruzoca"

Usuario@Admin MINGW64 ~/Documents/GitProjetos/Hightech 2019
$ git config --global user.email brunoariasrocha@hotmail.com

Usuario@Admin MINGW64 ~/Documents/GitProjetos/Hightech 2019
$ git config --list
core.symlinks=false
core.autocrlf=true
core.fscache=true
color.diff=auto
color.status=auto
color.branch=auto
color.interactive=true
help.format=html
rebase.autosquash=true
http.sslcainfo=C:/Program Files/Git/mingw64/ssl/certs/ca-bundle.crt
http.sslbackend=openssl
diff.astextplain.textconv=astextplain
filter.lfs.clean=git-lfs clean -- %f
filter.lfs.smudge=git-lfs smudge -- %f
filter.lfs.process=git-lfs filter-process
filter.lfs.required=true
credential.helper=manager
user.name=bruzoca
user.email=brunoariasrocha@hotmail.com

Usuario@Admin MINGW64 ~/Documents/GitProjetos/Hightech 2019
$ git init
Initialized empty Git repository in C:/Users/Usuario/Documents/GitProjetos/Hightech 2019/.git/

Usuario@Admin MINGW64 ~/Documents/GitProjetos/Hightech 2019 (master)
$ git add README.md

Usuario@Admin MINGW64 ~/Documents/GitProjetos/Hightech 2019 (master)
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   README.md


Usuario@Admin MINGW64 ~/Documents/GitProjetos/Hightech 2019 (master)
$ git commit -m "Inicializando o projeto/GIT"
[master (root-commit) 8178401] Inicializando o projeto/GIT
 1 file changed, 1 insertion(+)
 create mode 100644 README.md

Usuario@Admin MINGW64 ~/Documents/GitProjetos/Hightech 2019 (master)
$ git status
On branch master
nothing to commit, working tree clean

Usuario@Admin MINGW64 ~/Documents/GitProjetos/Hightech 2019 (master)
$ git remote add origin https://github.com/bruzoca/t25-modulo2.git

Usuario@Admin MINGW64 ~/Documents/GitProjetos/Hightech 2019 (master)
$ git status
On branch master
nothing to commit, working tree clean

Usuario@Admin MINGW64 ~/Documents/GitProjetos/Hightech 2019 (master)
$ git push -u origin master
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Writing objects: 100% (3/3), 274 bytes | 68.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To https://github.com/bruzoca/t25-modulo2.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.

Usuario@Admin MINGW64 ~/Documents/GitProjetos/Hightech 2019 (master)
$ git status
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")

Usuario@Admin MINGW64 ~/Documents/GitProjetos/Hightech 2019 (master)
$ git add
Nothing specified, nothing added.
Maybe you wanted to say 'git add .'?

Usuario@Admin MINGW64 ~/Documents/GitProjetos/Hightech 2019 (master)
$ git add .

Usuario@Admin MINGW64 ~/Documents/GitProjetos/Hightech 2019 (master)
$ git status
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   README.md


Usuario@Admin MINGW64 ~/Documents/GitProjetos/Hightech 2019 (master)
$ git commit -m "Modificando o arquivo readme"
[master 4b59426] Modificando o arquivo readme
 1 file changed, 3 insertions(+), 1 deletion(-)

Usuario@Admin MINGW64 ~/Documents/GitProjetos/Hightech 2019 (master)
$ git status
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean

Usuario@Admin MINGW64 ~/Documents/GitProjetos/Hightech 2019 (master)
$ git push origin master
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 4 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 342 bytes | 171.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To https://github.com/bruzoca/t25-modulo2.git
   8178401..4b59426  master -> master

Usuario@Admin MINGW64 ~/Documents/GitProjetos/Hightech 2019 (master)
$
