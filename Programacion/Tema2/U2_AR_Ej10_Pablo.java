import java.util.*;
public class U2_AR_Ej10_Pablo{

public static void main(String[]args){

Scanner teclado= new Scanner(System.in);

int numero;

    System.out.println("Ingresa una nota entre el 0 y el 10");
    numero=teclado.nextInt();

    switch(numero){

        case 0:
            System.out.println("estas suspenso");
        break;
        case 1:
            System.out.println("estas suspenso");
        break;
        case 2:
            System.out.println("estas suspenso");
        break;
        case 3:
            System.out.println("estas suspenso");
        break;
        case 4:
            System.out.println("estas suspenso");
        break;
        case 5:
            System.out.println("estas aprobado con un suficiente");
        break;
        case 6:
            System.out.println("estas aprobado con un suficiente");
        break;
        case 7:
            System.out.println("estas aprobado con un bien");
        break;
        case 8:
            System.out.println("estas aprobado con un notable");
        break;
        case 9:
            System.out.println("estas aprobado con un notable");
        break;
        case 10:
            System.out.println("estas aprobado con un sobresaliente");
        break;
        default: 
        System.out.println("Nota no valida");

    }

}
}