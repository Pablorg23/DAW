import java.util.*;

public class Ejercicio5_Pablo {
    
    static Scanner teclado = new Scanner(System.in);
    static int[] cuentas = new int[10];
    static int[] bono = new int[15];
    static int[] mejoresPuntuaciones = {85, 92, 78, 96, 88}; // le he puesto valores por defecto ya que en el enunciado no me indica nada.

    public static void main(String[] args) {
        // a) Este realmente no es necesario ya que cuando inicializas un array por defecto ya se inicializa a 0.
        for (int i = 0; i < cuentas.length; i++) {
            cuentas[i] = 0;
        }

        // b) Sumar uno a cada uno de los 15 elementos del array bono de tipo entero.
        for (int i = 0; i < bono.length; i++) {
            bono[i] += 1;
        }

        // c) Imprimir los cinco valores del array mejoresPuntuaciones en formato de columnas.
        System.out.println("Mejores Puntuaciones:");
        System.out.println("Índice\t\tPuntuación");
        for (int i = 0; i < 5; i++) {
            System.out.print(i + "\t\t\t" + mejoresPuntuaciones[i] + "\n");
        }

        
    }
}

