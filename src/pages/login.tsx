import { LoginForm } from "@/components/forms/login-form";
import { loginSchmea } from "@/components/forms/login-form/schema";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { nestedForm } from "@/lib/nested-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { InferType, object } from "yup";
const schema = object({
    login: loginSchmea,
});
export const Login = () => {
    const form = useForm({
        resolver: yupResolver(schema),
    });
    const onLogin = (data: InferType<typeof schema>) => {
        console.log(data);
    };
    return (
        <div className="w-full h-dvh flex items-center justify-center px-4">
            <Card className="border-0 rounded-3xl max-w-lg w-full">
                <CardHeader className="px-11 py-10">
                    <CardTitle>Авторизация</CardTitle>
                    <CardDescription>
                        Введите данные учетной записи для авторизации
                    </CardDescription>
                </CardHeader>
                <form onSubmit={form.handleSubmit(onLogin)}>
                    <Form {...form}>
                        <CardContent className="px-11 pt-0">
                            <LoginForm form={nestedForm(form, "login")} />
                            <Button type="submit" className="w-full mt-10 h-12">
                                Авторизаться
                            </Button>
                        </CardContent>
                        <CardFooter className="flex flex-col gap-4 px-11">
                            <div className="flex items-center justify-center w-full">
                                <p>У вас нет учетной записи?</p>
                                <Link to="/register">
                                    <Button variant={"link"}>
                                        Зарегистрироваться
                                    </Button>
                                </Link>
                            </div>
                            <div className="relative w-full">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t" />
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-background px-2 text-muted-foreground">
                                        Помощь
                                    </span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 w-full">
                                <Button className="w-full h-12" variant={"outline"}>@testname</Button>
                                <Button className="w-full h-12" variant={"outline"}>
                                    <Phone />
                                    +7 (777) 777-77-77
                                </Button>
                            </div>
                        </CardFooter>
                    </Form>
                </form>
            </Card>
        </div>
    );
};
