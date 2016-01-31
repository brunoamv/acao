from django.template.context import RequestContext
from django.shortcuts import redirect, render_to_response
from .models import Parlamentar,Comissoes
from django.http import HttpResponse
import simplejson

def go_to_index(request):
    responseDict = {}
    return render_to_response('index.html', responseDict, context_instance=RequestContext(request))

def go_to_parlamentares(request):
    responseDict = {}
    #parlamentares_list = []
    #parlamentares = Parlamentar.objects.all()
    #for parlamentar in parlamentares:
    #    parlamentares_list.append(parlamentar.toJSON())
    #responseDict['parlamentares'] = parlamentares_list
    return render_to_response('parlamentares.html', responseDict, context_instance=RequestContext(request))

def listar_parlamentares(request):

    responseDict = {}
    parlamentares_list = []
    parlamentares = Parlamentar.objects.all()
    for parlamentar in parlamentares:
        parlamentares_list.append(parlamentar.toJSON())
    responseDict['parlamentares'] = parlamentares_list
    return jsonResponse(responseDict)

def detail_parlamentares(request, id_parlamentar):
    responseDict = {}
    parlamentar = Parlamentar.objects.get(id=id_parlamentar)
    responseDict["parlamentar"] = parlamentar.toJSON()
    return render_to_response('parlamentares_detalhe.html', responseDict, context_instance=RequestContext(request))

def go_to_comissao(request):
    responseDict = {}
    return render_to_response('comissao2.html', responseDict, context_instance=RequestContext(request))

def listar_comissoes(request):
    responseDict = {}
    comissoes_list = []
    comissoes = Comissoes.objects.all()
    for comissao in comissoes:
        comissoes_list.append(comissao.toJSON())
    responseDict['comissoes'] = comissoes_list
    return jsonResponse(responseDict)


def jsonResponse(responseDict):
   return HttpResponse(simplejson.dumps(responseDict), content_type='application/json')