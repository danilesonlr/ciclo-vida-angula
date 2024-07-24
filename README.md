# LifeCycle

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



# Curiosidades do curso

Para eu criar uma varivavel vazia devo adicionar a expressão ! exemplo   listaDeCampra! : Array<Item> (app.component.ts)

No Angular, a interface OnInit é usada para definir um método de ciclo de vida chamado ngOnInit. Esse método é uma das fases do ciclo de vida de um componente ou diretiva. Ele é executado logo após a criação do componente, uma vez que suas propriedades de entrada (@Input()) foram inicializadas.

A finalidade do ngOnInit é fornecer um local para inicializar a lógica do componente que depende de seus valores de entrada, fazer chamadas de inicialização de dados, configurar assinaturas de serviços ou realizar outras tarefas de configuração necessárias antes que o componente comece a interagir com o usuário.


a diretiva @Input() e utilizado para passar informações de um componente pai para o filho.


No Angular, "gancho" (hook) refere-se aos métodos do ciclo de vida de um componente ou diretiva. Esses métodos permitem que você execute código em momentos específicos durante a vida útil de um componente ou diretiva, oferecendo uma maneira de "enganchar-se" no fluxo de execução do Angular.

Principais ganchos (hooks) de ciclo de vida no Angular:

    # ngOnChanges(changes: SimpleChanges):

    Chamado quando uma ou mais propriedades de entrada de um componente ou diretiva são alteradas.
    Recebe um objeto SimpleChanges que contém o valor atual e o valor anterior das propriedades de entrada.

    # ngOnInit():

    Chamado uma vez, após a criação do componente e a inicialização das propriedades de entrada.
    Ideal para inicializar o componente.

    # ngDoCheck():

    Chamado durante cada ciclo de verificação de mudanças.
    Permite detectar e reagir a mudanças que Angular não pode detectar automaticamente.

    # ngAfterContentInit():

    Chamado após a Angular projetar o conteúdo externo na visualização do componente.
    
    # ngAfterContentChecked():

    Chamado após a verificação de conteúdo projetado.

    # ngAfterViewInit():

    Chamado após a inicialização das visualizações do componente e suas visualizações filhas.

    # ngAfterViewChecked():

    Chamado após a verificação das visualizações do componente e suas visualizações filhas.

    # ngOnDestroy():

    Chamado antes da destruição do componente.
    Útil para realizar limpeza, como cancelar assinaturas de serviços ou desvincular manipuladores de eventos.