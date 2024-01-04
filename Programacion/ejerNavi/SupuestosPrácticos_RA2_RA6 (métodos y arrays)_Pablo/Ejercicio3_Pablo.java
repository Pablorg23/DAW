import java.util.*;
public class Ejercicio3_Pablo {

    final static int[] t = new int[3];
    final static int[][] aux = new int[2][3];
    final static Scanner teclado = new Scanner(System.in);

    public static void main(String[] args) {
       
        menu();
        ejercicioK();
        ejercicioL();
        ejercicioM();
        ejercicioN();
        ejercicioO();
        ejercicioP();
        ejercicioQ();
        ejercicioR();
        ejercicioS();
        ejercicioT();
        ejercicioU();
        ejercicioV();
        ejercicioW();
        ejercicioX();
    }

    public static void menu(){

        System.out.println("Buenas ahora se iran realizando las siguientes opciones en orden");

    }
    public static void ejercicioK() {
        //esta creado arriba
    }

    public static void ejercicioL() {
        System.out.println("l) El array aux tiene " + aux.length + " filas.");
    }

    public static void ejercicioM() {
        System.out.println("m) El array aux tiene " + aux[0].length + " columnas.");
    }

    public static void ejercicioN() {
        System.out.println("n) El array aux tiene " + aux.length * aux[0].length + " elementos.");
    }

    public static void ejercicioO() {
        t[0] = 0;
    }

    public static void ejercicioP() {
        for (int i = 0; i < aux.length; i++) {
            System.out.println("   aux[" + i + "][2] = " + aux[i][2]);
        }
    }

    public static void ejercicioQ() {
        aux[0][1] = 0;
    }

    public static void ejercicioR() {
        for (int i = 0; i < aux.length; i++) {
            for (int j = 0; j < aux[0].length; j++) {
                aux[i][j] = 0;
            }
        }
    }

    public static void ejercicioS() {
        for (int i = 0; i < aux.length; i++) {
            for (int j = 0; j < aux[0].length; j++) {
                aux[i][j] = 0;
            }
        }
    }

    public static void ejercicioT() {
        for (int i = 0; i < aux.length; i++) {
            for (int j = 0; j < aux[0].length; j++) {
                System.out.print("Ingrese el valor para aux " + i +" "+ j +": ");
                aux[i][j] = teclado.nextInt();
            }
        }
    }

    public static void ejercicioU() {
        int minAux = aux[0][0];
        for (int i = 0; i < aux.length; i++) {
            for (int j = 0; j < aux[0].length; j++) {
                if (aux[i][j] < minAux) {
                    minAux = aux[i][j];
                }
            }
        }
        System.out.println("u) El valor más pequeño en aux es: " + minAux);
    }

    public static void ejercicioV() {
        System.out.printf("v) Elementos de la primera fila de aux: %d %d %d\n", aux[0][0], aux[0][1], aux[0][2]);
    }

    public static void ejercicioW() {
        int totalColumna3 = aux[0][2] + aux[1][2];
        System.out.println("w) La suma de los elementos de la tercera columna de aux es: " + totalColumna3);
    }

    public static void ejercicioX() {
        System.out.println("x) Contenido de aux en formato tabular:");
        System.out.println("Índices\t\tColumna 0\tColumna 1\tColumna 2");
        for (int i = 0; i < aux.length; i++) {
            System.out.print("Fila " + i + "\t\t");
            for (int j = 0; j < aux[0].length; j++) {
                System.out.print(aux[i][j] + "\t\t");
            }
            System.out.println();
        }
    }
}
