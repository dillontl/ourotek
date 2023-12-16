"use client"
import {useEffect} from "react";

/**
 *  Since bootstrap js doesnt have documented
 *  integration to app router next js
 *  using this component to initialize it into the
 *  layout.tsx component
 * */
export default function BootstrapInit() {
    useEffect(() => {
        import ('bootstrap/dist/js/bootstrap.js');
    }, []);
}