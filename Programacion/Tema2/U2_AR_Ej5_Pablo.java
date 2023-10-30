import java.util.*;
public class U2_AR_Ej5_Pablo{

    public static void main(String[]args){

    Scanner teclado=new Scanner(System.in);

    int numero;

    System.out.println("Inserta un numero");
        numero=teclado.nextInt();

        if(numero%2==0){

            System.out.println("par");

        }else{
            System.out.println("impar");
        }


    }

}