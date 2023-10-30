import java.util.*;
public class U2_AR_Ej6_Pablo{

    public static void main(String[]args){

    Scanner teclado=new Scanner(System.in);

    boolean aux;
    int numero1,numero2;

    System.out.println("Introduce un numero");
    numero1=teclado.nextInt();

    System.out.println("Introduce un numero");
    numero2=teclado.nextInt();


    if(numero1<numero2){

        System.out.println("El numero 1 es menor que el numero 2");
    }else{
        System.out.println("El numero 2 es menor que el numero 1");
    }

    }

}