import java.util.Scanner;

public class Ejercicio6_Pablo {
    
    static Scanner teclado=new Scanner(System.in);

    public static void main(String[]args){


                int[][] ventas = new int[3][5];
        
                for (int fila = 0; fila < ventas.length; fila++) {
                    for (int col = 0; col < ventas[fila].length; col++) {
                        ventas[fila][col] = 0;
                        System.out.print("ventas["+fila+"]["+col+"]="+ventas[fila][col]+"\t\n");
                    }
                    System.out.println();  // Salto de línea después de cada fila
                }
            }
        }
        
    

