"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Users, Phone, Home, Building, Wifi, Cable, CheckCircle, XCircle } from 'lucide-react';


function ConnectionRequestsTable() {
    const router = useRouter();

    useEffect(() => {
      const isAdmin = localStorage.getItem("isAdmin")
      if (!isAdmin) {
        router.push("/admin/login")
      }
    }, [router])
    

    const [connections, setConnections] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchConnections = async () => {
            try {
                let r = await fetch("/api/get-connections")
                let data = await r.json()
                setConnections(data)
            } catch (error) {
                console.error("Users not found : ", error)
            } finally {
                setLoading(false)
            }
        }

        fetchConnections()
    }, [])
    if (loading) {
        return <p>Loading</p>
    }


    return (
        <div className='w-full min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 p-6'>
            {/* Header */}
            <div className='mb-8'>
                <div className='max-w-7xl mx-auto'>
                    <div className='flex items-center gap-4 mb-6'>
                        <div className='inline-flex items-center justify-center p-3 bg-cyan-500/20 rounded-full'>
                            <Users className='w-8 h-8 text-cyan-400' />
                        </div>
                        <h1 className='text-4xl font-bold text-white'>Connection Requests</h1>
                    </div>
                    <p className='text-xl text-gray-300 max-w-2xl'>Manage and track internet connection requests from customers</p>
                </div>
            </div>

            {/* Table Container */}
            <div className='max-w-7xl mx-auto'>
                <div className='bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden'>
                    <div className='overflow-x-auto'>
                        <table className='w-full'>
                            <thead>
                                <tr className='bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-b border-white/10'>
                                    <th className='px-6 py-4 text-left'>
                                        <div className='flex items-center gap-2'>
                                            <Users className='w-4 h-4 text-cyan-400' />
                                            <span className='text-white font-semibold'>Name</span>
                                        </div>
                                    </th>
                                    <th className='px-6 py-4 text-left'>
                                        <div className='flex items-center gap-2'>
                                            <Phone className='w-4 h-4 text-green-400' />
                                            <span className='text-white font-semibold'>Number</span>
                                        </div>
                                    </th>
                                    <th className='px-6 py-4 text-left'>
                                        <div className='flex items-center gap-2'>
                                            <Home className='w-4 h-4 text-blue-400' />
                                            <span className='text-white font-semibold'>House No</span>
                                        </div>
                                    </th>
                                    <th className='px-6 py-4 text-left'>
                                        <div className='flex items-center gap-2'>
                                            <Building className='w-4 h-4 text-purple-400' />
                                            <span className='text-white font-semibold'>Floor</span>
                                        </div>
                                    </th>
                                    <th className='px-6 py-4 text-left'>
                                        <div className='flex items-center gap-2'>
                                            <Building className='w-4 h-4 text-orange-400' />
                                            <span className='text-white font-semibold'>Block</span>
                                        </div>
                                    </th>
                                    <th className='px-6 py-4 text-left'>
                                        <div className='flex items-center gap-2'>
                                            <Wifi className='w-4 h-4 text-cyan-400' />
                                            <span className='text-white font-semibold'>Plan</span>
                                        </div>
                                    </th>
                                    <th className='px-6 py-4 text-center'>
                                        <div className='flex items-center justify-center gap-2'>
                                            <Wifi className='w-4 h-4 text-blue-400' />
                                            <span className='text-white font-semibold'>Router</span>
                                        </div>
                                    </th>
                                    <th className='px-6 py-4 text-center'>
                                        <div className='flex items-center justify-center gap-2'>
                                            <Cable className='w-4 h-4 text-yellow-400' />
                                            <span className='text-white font-semibold'>Cable</span>
                                        </div>
                                    </th>
                                    <th className='px-6 py-4 text-center'>
                                        <div className='flex items-center justify-center gap-2'>
                                            <CheckCircle className='w-4 h-4 text-green-400' />
                                            <span className='text-white font-semibold'>Agree</span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {connections.map((c, index) => (
                                    <tr
                                        key={c._id}
                                        className={`border-b border-white/5 hover:bg-white/5 transition-colors duration-200 ${index % 2 === 0 ? 'bg-white/2' : 'bg-transparent'
                                            }`}
                                    >
                                        <td className='px-6 py-4'>
                                            <div className='text-white font-medium'>
                                                {c.name || <span className='text-gray-400'>N/A</span>}
                                            </div>
                                        </td>
                                        <td className='px-6 py-4'>
                                            <div className='text-gray-300 font-mono'>
                                                {c.number || <span className='text-gray-400'>N/A</span>}
                                            </div>
                                        </td>
                                        <td className='px-6 py-4'>
                                            <div className='text-gray-300'>
                                                {c.houseNo || <span className='text-gray-500'>-</span>}
                                            </div>
                                        </td>
                                        <td className='px-6 py-4'>
                                            <div className='text-gray-300'>
                                                {c.floor || <span className='text-gray-500'>-</span>}
                                            </div>
                                        </td>
                                        <td className='px-6 py-4'>
                                            <div className='text-gray-300'>
                                                {c.block || <span className='text-gray-500'>-</span>}
                                            </div>
                                        </td>
                                        <td className='px-6 py-4'>
                                            <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${c.plan ? 'bg-cyan-500/20 text-cyan-300' : 'bg-gray-500/20 text-gray-400'
                                                }`}>
                                                {c.plan || '-'}
                                            </div>
                                        </td>
                                        <td className='px-6 py-4 text-center'>
                                            <div className='flex justify-center'>
                                                {c.router ? (
                                                    <div className='inline-flex items-center justify-center w-8 h-8 bg-green-500/20 rounded-full'>
                                                        <CheckCircle className='w-5 h-5 text-green-400' />
                                                    </div>
                                                ) : (
                                                    <div className='inline-flex items-center justify-center w-8 h-8 bg-red-500/20 rounded-full'>
                                                        <XCircle className='w-5 h-5 text-red-400' />
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                        <td className='px-6 py-4 text-center'>
                                            <div className='flex justify-center'>
                                                {c.cable ? (
                                                    <div className='inline-flex items-center justify-center w-8 h-8 bg-green-500/20 rounded-full'>
                                                        <CheckCircle className='w-5 h-5 text-green-400' />
                                                    </div>
                                                ) : (
                                                    <div className='inline-flex items-center justify-center w-8 h-8 bg-red-500/20 rounded-full'>
                                                        <XCircle className='w-5 h-5 text-red-400' />
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                        <td className='px-6 py-4 text-center'>
                                            <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${c.agree
                                                ? 'bg-green-500/20 text-green-300'
                                                : 'bg-red-500/20 text-red-300'
                                                }`}>
                                                {c.agree ? 'Yes' : 'No'}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Empty State */}
                    {connections.length === 0 && (
                        <div className='text-center py-12'>
                            <Users className='w-12 h-12 text-gray-500 mx-auto mb-4' />
                            <h3 className='text-xl font-semibold text-gray-400 mb-2'>No Connection Requests</h3>
                            <p className='text-gray-500'>Connection requests will appear here when customers submit them.</p>
                        </div>
                    )}
                </div>

                {/* Summary Stats */}
                <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mt-8'>
                    <div className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10'>
                        <div className='flex items-center gap-3'>
                            <div className='w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center'>
                                <Users className='w-5 h-5 text-blue-400' />
                            </div>
                            <div>
                                <p className='text-gray-400 text-sm'>Total Requests</p>
                                <p className='text-2xl font-bold text-white'>{connections.length}</p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10'>
                        <div className='flex items-center gap-3'>
                            <div className='w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center'>
                                <CheckCircle className='w-5 h-5 text-green-400' />
                            </div>
                            <div>
                                <p className='text-gray-400 text-sm'>Agreed</p>
                                <p className='text-2xl font-bold text-white'>
                                    {connections.filter(c => c.agree).length}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10'>
                        <div className='flex items-center gap-3'>
                            <div className='w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center'>
                                <Wifi className='w-5 h-5 text-cyan-400' />
                            </div>
                            <div>
                                <p className='text-gray-400 text-sm'>Router Needed</p>
                                <p className='text-2xl font-bold text-white'>
                                    {connections.filter(c => c.router).length}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10'>
                        <div className='flex items-center gap-3'>
                            <div className='w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center'>
                                <Cable className='w-5 h-5 text-yellow-400' />
                            </div>
                            <div>
                                <p className='text-gray-400 text-sm'>Cable Needed</p>
                                <p className='text-2xl font-bold text-white'>
                                    {connections.filter(c => c.cable).length}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConnectionRequestsTable;