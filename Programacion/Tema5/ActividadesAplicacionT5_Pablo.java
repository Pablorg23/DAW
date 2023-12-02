import java.util.Scanner;

public class ActividadesAplicacionT5_Pablo {

    private static Scanner teclado = new Scanner(System.in);

    public static void main(String[] args) {
        boolean confirmarSalir = false;

        do {
            menu();
            int opcionUsuario = obtenerOpcionUsuario();

            confirmarSalir = validarYEjecutarOpcion(opcionUsuario, confirmarSalir);
        } while (!confirmarSalir);

        teclado.close();
    }

    public static void menu() {
        System.out.println("Bienvenido al Menú:");
        System.out.println("0. Salir");
        System.out.println("1. Ejercicio 1");
        System.out.println("2. Ejercicio 2");
        System.out.println("3. Ejercicio 3");
        System.out.println("4. Ejercicio 4");
    }

    public static int obtenerOpcionUsuario() {
        try {
            System.out.print("Selecciona una opción: ");
            return teclado.nextInt();
        } catch (java.util.InputMismatchException e) {
            System.out.println("Por favor, ingresa un número válido.");
            teclado.next();
            return -1; // Retorna valor no válido para indicar error
        }
    }

    public static boolean validarYEjecutarOpcion(int opcionUsuario, boolean confirmarSalir) {
        switch (opcionUsuario) {
            case 0:
                return salir();
            case 1:
                ejecutarEjercicio1();
                break;
            case 2:
                ejecutarEjercicio2();
                break;
            case 3:
                ejecutarEjercicio3();
                break;
            case 4:
                ejecutarEjercicio4();
                break;
            case 5:
                ejecutarEjercicio5();
                break;
            default:
                System.out.println("\nOpción no válida. Por favor, selecciona una opción válida.\n");
                break;
        }
        return confirmarSalir;
    }

    public static void ejecutarEjercicio1() {//metodo con array de int por defecto
        int[] mostrar = new int[10];
        System.out.println("Seleccionaste la opción 1:");

        for (int i = 0; i < mostrar.length; i++) {
            System.out.println(mostrar[i]);
        }
    }

    public static void ejecutarEjercicio2() {//metodo con array de int con valor dado por otro metodo
        System.out.println("Seleccionaste la opción 2: Pedir 10 números enteros.");
        int[] arrayEnteros = new int[10];

        for (int i = 0; i < arrayEnteros.length; i++) {
            arrayEnteros[i] = pedirNumEntero();
        }

        System.out.println("Números ingresados:");
        for (int i = 0; i < arrayEnteros.length; i++) {
            System.out.println(arrayEnteros[i]);
        }
    }

    public static void ejecutarEjercicio3() {//metodo con array de char por defecto
        System.out.println("Seleccionaste la opción 3: Array de caracteres con valores por defecto.");
        char[] arrayCaracteres = new char[6]; 

        System.out.println("Valores por defecto:");
        for (int i = 0; i < arrayCaracteres.length; i++) {
            System.out.println(arrayCaracteres[i]);
        }
    }

    public static void ejecutarEjercicio4() {//metodo con array de char con valor dado por otro metodo
        System.out.println("Seleccionaste la opción 4: Pedir 6 caracteres para un array.");
        char[] arrayChars = new char[6];

        for (int i = 0; i < arrayChars.length; i++) {
            arrayChars[i] = pedirChar();
        }

        System.out.println("Caracteres ingresados:");
        for (int i = 0; i < arrayChars.length; i++) {
            System.out.println(arrayChars[i]);
        }
    }
    public static void ejecutarEjercicio5() {//metodo con array de String con valores dados por el usuario y que poga su nombre y apellidos

        System.out.println("Seleccionaste la opción 5: Pedir 10 String con nombres y apellidos y añadirlos a un array");

        String [] nombresApellidos =new String[5];


    }

    public static int pedirNumEntero() {
        int numero = 0;
        boolean entradaValida = false;

        do {
            try {
                System.out.print("Ingrese un número entero: ");
                numero = teclado.nextInt();
                entradaValida = true;
            } catch (java.util.InputMismatchException e) {
                System.out.println("Por favor, ingresa un número entero válido.");
                teclado.next();
            }
        } while (!entradaValida);

        return numero;
    }

    public static char pedirChar() {
        char caracter = ' ';

        do {
            try {
                System.out.print("Ingrese un carácter: ");
                caracter = teclado.next().charAt(0);
            } catch (java.util.InputMismatchException e) {
                System.out.println("Por favor, ingresa un carácter válido.");
                teclado.next();
            }
        } while (!Character.isLetter(caracter));

        return caracter;
    }

    public static boolean salir() {
        char letra = ' ';

        do {
            System.out.println("¿Estás seguro de que quieres salir? (s/n)");
            letra = teclado.next().charAt(0);

            if (letra == 's' || letra == 'S') {
                return true;
            } else if (letra == 'n' || letra == 'N') {
                return false;
            } else {
                System.out.println("Respuesta no válida. Por favor, ingresa 's' o 'n'.");
            }

        } while (letra != 's' && letra != 'S' && letra != 'n' && letra != 'N');

        return false;
    }
}
