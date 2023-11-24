import java.util.Scanner;
import java.util.Random;

public class EjerciciosFinalesT4 {
    static Scanner teclado = new Scanner(System.in);
    static Random random = new Random();

    public static void main(String[] args) {
        menu();
    }

    static void menu() {
        int opcion;
        boolean salida = false;
        do {
            System.out.println("1. Hacer los ejercicios");
            System.out.println("2. Salir");
            System.out.print("Elige una opción: ");
            opcion = teclado.nextInt();

            switch (opcion) {
                case 1:
                    System.out.println("Has seleccionado la opcion de los ejericios ahora se iran haciendo en orden.");
                    System.out.println("Ejercicio 11\n");
                        calculaEsfera();
                    System.out.println("Ejercicio 12\n");
                        distancia();
                    System.out.println("Ejercicio 13\n");
                        muestraPares();
                    System.out.println("Ejercicio 14\n");
                        calculaSegundos();
                    System.out.println("Ejercicio 15\n");
                        diferenciaMin();
                    System.out.println("Ejercicio 16\n");
                        divisoresPrimos();
                    System.out.println("Ejercicio 17\n");
                        sonAmigos();
                    System.out.println("Ejercicio 18\n");
                        mostrarNumerosAleatorios();
                    System.out.println("Ejercicio 19\n");
                    System.out.println("Introduce la cantidad de números reales");
                     int cantidadNum=teclado.nextInt();

                        mostrarNumerosAleatorios(cantidadNum);
            
                break;
                case 2:
                    System.out.print("¿Estás seguro de que quieres salir? (s/n): ");
                    char confirmacion = teclado.next().charAt(0);
                    if (confirmacion == 's' || confirmacion == 'S') {
                        System.out.println("byeee...");
                        salida = true;
                    }
                    break;
                default:
                    System.out.println("Opción no válida. Inténtalo de nuevo.");
                    break;
            }
        } while (!salida);
    }
    //ejercicio 4.11
    public static void calculaEsfera() {
        System.out.println("Introduce el radio de la esfera:");
        double radio = teclado.nextDouble();

        double superficie = 4 * Math.PI * Math.pow(radio, 2);
        double volumen = (4/3) * Math.PI * Math.pow(radio, 3);

        System.out.println("La superficie de la esfera es: " + superficie);
        System.out.println("El volumen de la esfera es: " + volumen);
    }
    //ejercicio 4.12
    public static void distancia() {
    System.out.println("Introduce x1:");
    double x1 = teclado.nextDouble();
    System.out.println("Introduce y1:");
    double y1 = teclado.nextDouble();
    System.out.println("Introduce x2:");
    double x2 = teclado.nextDouble();
    System.out.println("Introduce y2:");
    double y2 = teclado.nextDouble();

    double dx = x2 - x1;
    double dy = y2 - y1;
    double dist = Math.sqrt(dx * dx + dy * dy);

    System.out.println("La distancia entre los puntos (" + x1 + ", " + y1 + ") y (" + x2 + ", " + y2 + ") es " + dist);
    }

    //ejercicio 4.13
    public static void muestraPares() {
    System.out.println("Introduce el número de pares que quieres mostrar:");
    int n = teclado.nextInt();

    System.out.println("Los primeros " + n + " números pares son:");
    for (int i = 0; i < n; i++) {
        System.out.println(i * 2);
    }
    }

    //ejercicio 4.14
    public static void calculaSegundos() {
    System.out.println("Introduce el número de días:");
    int dias = teclado.nextInt();
    System.out.println("Introduce el número de horas:");
    int horas = teclado.nextInt();
    System.out.println("Introduce el número de minutos:");
    int minutos = teclado.nextInt();

    int segundos = dias * 24 * 60 * 60 + horas * 60 * 60 + minutos * 60;

    System.out.println("El número total de segundos en los datos de entrada es: " + segundos);
    }

    //ejercicio 4.15
    public static void diferenciaMin() {
    System.out.println("Introduce la hora del primer instante:");
    int hora1 = teclado.nextInt();
    System.out.println("Introduce los minutos del primer instante:");
    int minuto1 = teclado.nextInt();
    System.out.println("Introduce la hora del segundo instante:");
    int hora2 = teclado.nextInt();
    System.out.println("Introduce los minutos del segundo instante:");
    int minuto2 = teclado.nextInt();

    int instante1 = hora1 * 60 + minuto1;
    int instante2 = hora2 * 60 + minuto2;
    int diferencia = Math.abs(instante2 - instante1);

    System.out.println("La diferencia entre los dos instantes es: " + diferencia + " minutos.");
}
//ejercicio 4.16
public static void divisoresPrimos() {
    System.out.println("Introduce un número:");
    int num = teclado.nextInt();

    System.out.println("Los divisores primos de " + num + " son:");
    for (int i = 2; i <= num; i++) {
        if (num % i == 0) {
            if (esPrimo(i)) {
                System.out.println(i);
            }
        }
    }
}

public static boolean esPrimo(int num) {
    for (int i = 2; i * i <= num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
//ejercicio 4.17
public static void sonAmigos() {
    System.out.println("Introduce el primer número:");
    int num1 = teclado.nextInt();
    System.out.println("Introduce el segundo número:");
    int num2 = teclado.nextInt();

    if (sumaDivisores(num1) == num2 && sumaDivisores(num2) == num1) {
        System.out.println("Los números " + num1 + " y " + num2 + " son amigos.");
    } else {
        System.out.println("Los números " + num1 + " y " + num2 + " no son amigos.");
    }
}

public static int sumaDivisores(int num) {
    int suma = 0;
    for (int i = 1; i < num; i++) {
        if (num % i == 0) {
            suma += i;
        }
    }
    return suma;
}

//ejercicio 4.18 y 4.19
public static void mostrarNumerosAleatorios() {
        System.out.println("Introduce el valor mínimo para números enteros:");
        int minimo = teclado.nextInt();

        System.out.println("Introduce el valor máximo para números enteros:");
        int maximo = teclado.nextInt();

        System.out.println("Introduce la cantidad de números enteros:");
        int cantidad = teclado.nextInt();

        for (int i = 0; i < cantidad; i++) {
            int numeroAleatorio = random.nextInt((maximo - minimo) + 1) + minimo;
            System.out.println(numeroAleatorio);
        }
    }

    // Sobrecarga de la función para números reales entre 0 y 1 con cantidad como parámetro
    public static void mostrarNumerosAleatorios(int cantidad) {
        for (int i = 0; i < cantidad; i++) {
            double numeroAleatorio = random.nextDouble();
            System.out.println(numeroAleatorio);
        }
    }

}