import java.util.Scanner;

public class Ejercicio1_Pablo {

    final static Scanner teclado=new Scanner(System.in);
    public static void main(String[] args) {
        
        menu();

    }

    public static void menu(){


        boolean salida = true;

        System.out.println("Buenas, introduce los 2 numeros enteros para hacer el calculo");
        System.out.println("Introduce el numero 1");
        int numero1=teclado.nextInt();
        System.out.println("Ahora el numero 2");
        int numero2=teclado.nextInt();

        do {
        System.out.println("Selecciona un opcion del menu.\n0.Salir.\n1.Sumar\n2.Restar\n3.Multiplicar\n4.Dividir\n5.Resto");
        int opcion=teclado.nextInt();
        
        
        
            switch (opcion) {
                case 0:

                    System.out.println("Has seleccionado salir.\n1.Para salir\nCualquier otro para volver");
                    int confirmacion = teclado.nextInt();


                    if (confirmacion == 1) {
                        salida = false;
                    }
                    break;
                case 1:
                    sumar(numero1,numero2);
                    break;
                case 2:
                    restar(numero1,numero2);
                    break;
                case 3:
                    multiplicar(numero1,numero2);
                    break;
                case 4:
                    dividir(numero1,numero2);
                    break;
                case 5:
                    resto(numero1,numero2);
                    break;
                default:
                    System.out.println("Has seleccionado una opcion no valida.");
                    menu();
                    break;
            }
        } while (salida == true);
    }

    public static void sumar(int numero1, int numero2) {
        int resultado = numero1 + numero2;
        System.out.println("La suma es: " + resultado);
    }

    public static void restar(int numero1, int numero2) {
        int resultado = numero1 - numero2;
        System.out.println("La resta es: " + resultado);
    }

    public static void multiplicar(int numero1, int numero2) {
        int resultado = numero1 * numero2;
        System.out.println("La multiplicación es: " + resultado);
    }

    public static void dividir(int numero1, int numero2) {
        if (numero2 != 0) {
            int resultado = numero1 / numero2;
            System.out.println("La división es: " + resultado);
        } else {
            System.out.println("No es posible dividir por cero.");
        }
    }
 
    public static void resto(int numero1, int numero2) {
        if (numero2 != 0) {
            int resultado = numero1 % numero2;
            System.out.println("El resto es: " + resultado);
        } else {
            System.out.println("No es posible obtener el resto al dividir por cero.");
        }
    }
}