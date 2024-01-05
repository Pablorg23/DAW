import java.util.Scanner;

public class Ejercicio4_Pablo {
    
    final static Scanner teclado=new Scanner(System.in);
    static int [] array=new int[5];

    public static void main(String[] args) {
        
        menu(); 

    }

    public static void menu(){

        System.out.println("Buenas.");

        for(int i=0;i<array.length;i++){

            System.out.println("Introduce el numero "+(i+1));
            int numero=teclado.nextInt();

            array[i]=numero;
            
        }

        for(int i=0;i<array.length;i++){

            System.out.println("el numero "+(i+1)+" del array es "+array[i]);

        }

    }

}
