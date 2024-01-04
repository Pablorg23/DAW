import java.util.*;

public class algo {

    final static Scanner teclado = new Scanner(System.in);
    static int[] enteros = new int[10];
    static int[] enterosCopia = new int[enteros.length];
    static double[] decimales = new double[10];
    static double[] decimalesCopia = new double[decimales.length];

    public static void main(String[] args) {
        menu();
    }

    public static void menu() {
        boolean salida = true;
        do {
            System.out.println("Selecciona una opcion");
            System.out.println("0. Salir");
            System.out.println("1. Rellenar aleatorio decimales y enteros");
            System.out.println("2. Rellenar a mano");
            System.out.println("3. Ordenar");
            System.out.println("4. Invertir");
            System.out.println("5. Comparar Array con todas sus casillas");
            System.out.println("6. Compara Array con su ArrayCopia");
            System.out.println("7. Mostrar el array de las 2 maneras");
            System.out.println("8. Usar el copy Array y mostrarlo");
            int opcion = teclado.nextInt();

            switch (opcion) {
                case 0:
                    System.out.println("Has seleccionado salir.\n1. Para salir\nCualquier otro para volver");
                    int confirmacion = teclado.nextInt();
                    if (confirmacion == 1) {
                        salida = false;
                    }
                    break;
                case 1:
                    System.out.println("Has seleccionado la opcion de rellenar de manera aleatoria los 2 array.");
                    rellenarArrayEnteros(enteros);
                    rellenarArrayDecimales(decimales);
                    break;
                case 2:
                    // Puedes implementar la lógica para rellenar a mano aquí
                    break;
                case 3:
                    ordenarTodos();
                    break;
                case 4:
                    invertirDecimales();
                    invertirEnteros();
                    break;
                case 5:
                    // Puedes implementar la lógica para comparar Array con todas sus casillas aquí
                    break;
                case 6:
                    // Puedes implementar la lógica para comparar Array con su ArrayCopia aquí
                    break;
                case 7:
                    mostrarArrayEnteros();
                    mostrarArrayDecimales();
                    break;
                case 8:
                    // Puedes implementar la lógica para usar el copy Array y mostrarlo aquí
                    break;
                default:
                    System.out.println("Has seleccionado una opcion no valida.");
                    break;
            }
        } while (salida);
    }
    
    public static void ordenarTodos() {

        Arrays.sort(enteros);
        Arrays.sort(enterosCopia);
        Arrays.sort(decimales);
        Arrays.sort(decimalesCopia);

    }
    
    

    public static double[] rellenarUsuarioDecimales(double[] decimales) {

        for (int i = 0; i < decimales.length; i++) {

            int valor;
            do{
            System.out.print("Que valor le quieres dar a la casilla nº" + i + " es:");
            valor = teclado.nextInt();

            }while(validarArrayDecimales(valor,decimales));
            
            decimales[i] = valor;
        }
        return decimales;
    }
    
    public static double generarNumeroDecimales(double[]array){
       
        double aux = 0;
        
        do{
        
        aux = 0 + (12 - 0) * Math.random();
        
        }while(validarArrayDecimales(aux,array));
        return aux;
    }
    
    public static boolean validarArrayDecimales(double aux,double array[]){
        
        for (int i = 0; i < array.length; i++) {
            if (array[i] == aux) {
                return true; // El número ya está en el array
            }
        }
        return false; // El número no está en el array
    }
    
    public static double[] rellenarArrayDecimales(double[]array){
        
        for(int i=0;i<decimales.length;i++){
            
            array[i]=generarNumeroDecimales(array);
            
        }
        
        return array;
    }
    
    public static void mostrarArrayDecimales() {

        for (int i = 0; i < decimales.length; i++) {
            System.out.println("El valor que hay dentro de la posicion " + i + " es de " + decimales[i]);
        }

        System.out.println(Arrays.toString(decimales));

    }
    
    public static void invertirDecimales() {
        for (int i = 0; i < decimales.length / 2; i++) {
            double aux = decimales[i];
            decimales[i] = decimales[decimales.length - 1 - i];
            decimales[decimales.length - 1 - i] = aux;
        }
    }
    
    
    public static int[] rellenarUsuarioEnteros(int[] enteros) {

        for (int i = 0; i < enteros.length; i++) {

            int valor;
            do{
            System.out.print("Que valor le quieres dar a la casilla nº" + i + " es:");
            valor = teclado.nextInt();

            }while(validarArrayEnteros(valor,enteros));
            
            enteros[i] = valor;
        }
        return enteros;
    }
    
    public static int generarNumeroEnteros(int[]array){
       
        int aux = 0;
       
        
        do{
        
        aux =(int) (0 + (12 - 0) * Math.random());
        
        }while(validarArrayEnteros(aux,array));
        return aux;
    }
    
    public static boolean validarArrayEnteros(int aux,int array[]){
        
        for (int i = 0; i < array.length; i++) {
            if (array[i] == aux) {
                return true; // El número ya está en el array
            }
        }
        return false; // El número no está en el array
    }
    
    public static int[] rellenarArrayEnteros(int[]array){
        
        for(int i=0;i<array.length;i++){
            
            array[i] =generarNumeroEnteros(array);            
        }
        
        return array;
    }
    
    public static void mostrarArrayEnteros() {

        for (int i = 0; i < enteros.length; i++) {
            System.out.println("El valor que hay dentro de la posicion " + i + " es de " + enteros[i]);
        }

        System.out.println(Arrays.toString(enteros));

    }
    
    public static void invertirEnteros() {
        for (int i = 0; i < enteros.length / 2; i++) {
            int aux = enteros[i];
            enteros[i] = enteros[enteros.length - 1 - i];
            enteros[enteros.length - 1 - i] = aux;
        }
    }
    

}
